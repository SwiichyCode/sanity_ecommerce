import { useState, useEffect } from "react";

export const useSuccessMessageTimeout = (
  setEditableItem: (item: string | null) => void
) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  useEffect(() => {
    if (successMessage) {
      const timeoutId = setTimeout(() => {
        setSuccessMessage(null);
        setEditableItem(null);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [successMessage, setSuccessMessage, setEditableItem]);

  return { successMessage, setSuccessMessage };
};
