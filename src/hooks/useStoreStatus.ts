import { useEffect, useState } from 'react';
import { getStoreStatus, type StoreStatus } from '../utils/businessHours';
import type { BusinessInfo } from '../types/content';

export function useStoreStatus(business: BusinessInfo): StoreStatus {
  const [status, setStatus] = useState(() => getStoreStatus(business, new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setStatus(getStoreStatus(business, new Date()));
    }, 60_000);

    return () => window.clearInterval(id);
  }, [business]);

  return status;
}
