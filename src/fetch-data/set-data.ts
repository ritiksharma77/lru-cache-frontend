import React from "react";

export  const setData = async (key: any, value: any, ttl:any, fetchCacheData: any) => {
    if (key && value && ttl > 0) {
      await fetch(`/set?key=${key}&value=${value}&ttl=${ttl}`);
      fetchCacheData();
      alert(`Value has been set: ${key}`);
    } else {
      alert("Please provide a valid key, value, and TTL.");
    }
  };