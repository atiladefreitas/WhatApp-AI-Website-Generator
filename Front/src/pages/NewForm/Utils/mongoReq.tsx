import axios from 'axios';

type Param = {
  field: string | undefined;
  value: string | undefined;
};

type Params = Param[];

interface ResponseData {
  success: boolean;
}

export const handleSubmit = async (
  fields: Params,
  userID: string | undefined
) => {
  const phone = userID;

  const body = {
    phone: userID,
    fields: fields,
  };

  try {
    const response = await fetch(
      `${import.meta.env.VITE_MAIN_API_URL}/updateSections`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (response.ok) {
      const data: ResponseData = await response.json();
      return data.success;
    }
    const data = await response.json();
  } catch (error) {
    throw 'error';
  }
};
