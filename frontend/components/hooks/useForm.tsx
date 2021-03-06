import { useEffect, useState } from 'react';

type FormData = {
  name?: string;
  value?: string | number;
  price?: number;
  image?: File | string;
  description?: string;
  password?: string;
  email?: string;
};

export default function useForm(initialData = {}) {
  const [formData, setFormData] = useState<FormData>(initialData);
  const initialValues = Object.values(initialData).join('');

  function onChangeInput(event) {
    let { name, value, type } = event.target;

    if (type === 'number') {
      value = +value;
    }
    if (type === 'file') {
      [value] = event.target.files;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  useEffect(() => {
    setFormData(initialData);
  }, [initialValues]);

  function resetForm() {
    setFormData(initialData);
  }

  function clearForm() {
    const emptiedFormFields = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, ''])
    );

    setFormData(emptiedFormFields);
  }

  return {
    formData,
    onChangeInput,
    clearForm,
    resetForm,
  };
}
