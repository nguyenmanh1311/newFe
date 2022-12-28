/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { AddressService } from "../../services/address.service";

const FETCH_TYPES = {
  CITIES: "FETCH_CITIES",
  DISTRICTS: "FETCH_DISTRICTS",
  WARDS: "FETCH_WARDS",
};

const PATHS = {
  CITIES: "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
  DISTRICTS:
    "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
  WARDS: "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward",
  LOCATION:
    "https://raw.githubusercontent.com/nhidh99/codergamo/master/004-location-selects/locations/location.json",
};

async function fetchLocationOptions(fetchType, locationId) {
  let url;
  if (fetchType === FETCH_TYPES.CITIES) {
    url = PATHS.CITIES;
    const locations = (
      await axios.get(url, {
        headers: { token: "60be7953-6f94-11ed-b09a-9a2a48e971b0" },
      })
    ).data?.data;
    return locations.map(({ ProvinceID, ProvinceName }) => ({
      value: ProvinceID,
      label: ProvinceName,
    }));
  }
  if (fetchType === FETCH_TYPES.DISTRICTS) {
    url = PATHS.DISTRICTS + "?province_id=" + locationId;
    const locations = (
      await axios.get(url, {
        headers: { token: "60be7953-6f94-11ed-b09a-9a2a48e971b0" },
      })
    ).data?.data;
    return locations.map(({ DistrictID, DistrictName }) => ({
      value: DistrictID,
      label: DistrictName,
    }));
  }
  if (fetchType === FETCH_TYPES.WARDS) {
    url = PATHS.WARDS + "?district_id=" + locationId;
    const locations = (
      await axios.get(url, {
        headers: { token: "60be7953-6f94-11ed-b09a-9a2a48e971b0" },
      })
    ).data?.data;
    return locations.map(({ WardCode, WardName }) => ({
      value: WardCode,
      label: WardName,
    }));
  }
  return [];
}

async function fetchInitialData(addressId) {
  let dataAddress = (await AddressService.getAddressByID(addressId)).data;
  const { provinceId, districtId, wardId } = dataAddress;
  const [cities, districts, wards] = await Promise.all([
    fetchLocationOptions(FETCH_TYPES.CITIES),
    fetchLocationOptions(FETCH_TYPES.DISTRICTS, provinceId),
    fetchLocationOptions(FETCH_TYPES.WARDS, districtId),
  ]);
  return {
    cityOptions: cities,
    districtOptions: districts,
    wardOptions: wards,
    selectedCity: cities.find((c) => c.value === provinceId),
    selectedDistrict: districts.find((d) => d.value === districtId),
    selectedWard: wards.find((w) => w.value === wardId),
  };
}

function useLocationForm(shouldFetchInitialLocation, idAddress) {
  let isMount = true;
  const [state, setState] = useState({
    cityOptions: [],
    districtOptions: [],
    wardOptions: [],
    selectedCity: null,
    selectedDistrict: null,
    selectedWard: null,
  });

  const { selectedCity, selectedDistrict } = state;

  useEffect(() => {
    if (isMount) {
      (async function () {
        if (shouldFetchInitialLocation) {
          const initialData = await fetchInitialData(idAddress);
          setState(initialData);
        } else {
          const options = await fetchLocationOptions(FETCH_TYPES.CITIES);
          setState({ ...state, cityOptions: options });
        }
      })();
    }
    return () => {
      isMount = false;
    };
  }, []);

  useEffect(() => {
    (async function () {
      if (!selectedCity) return;
      const options = await fetchLocationOptions(
        FETCH_TYPES.DISTRICTS,
        selectedCity.value
      );
      setState({ ...state, districtOptions: options });
    })();
  }, [selectedCity]);

  useEffect(() => {
    (async function () {
      if (!selectedDistrict) return;
      const options = await fetchLocationOptions(
        FETCH_TYPES.WARDS,
        selectedDistrict.value
      );
      setState({ ...state, wardOptions: options });
    })();
  }, [selectedDistrict]);

  function onCitySelect(option) {
    if (option !== selectedCity) {
      setState({
        ...state,
        districtOptions: [],
        wardOptions: [],
        selectedCity: option,
        selectedDistrict: null,
        selectedWard: null,
      });
    }
  }

  function onDistrictSelect(option) {
    if (option !== selectedDistrict) {
      setState({
        ...state,
        wardOptions: [],
        selectedDistrict: option,
        selectedWard: null,
      });
    }
  }

  function onWardSelect(option) {
    setState({ ...state, selectedWard: option });
  }

  function onSubmit(e) {
    e.preventDefault();
    window.location.reload();
  }

  return { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit };
}

export default useLocationForm;
