import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { InputAdornment } from "@mui/material";

const formats = ["image/jpeg", "image/png", "image/jpg"];

export const validateImagesObj = {
  validate: {
    acceptedFormatsf: (file) =>
      formats.includes(file[0]?.type) ||
      "Each image type must be Only PNG, JPEG, JPG",
  },
};

export const validateShortObj = {
  minLength: {
    value: 4,
    message: "Minimum Length is 4",
  },
  maxLength: {
    value: 50,
    message: "Max Length is 50",
  },
};

export const validateProductNameObj = {
  minLength: {
    value: 2,
    message: "Minimum Length is 2",
  },
  maxLength: {
    value: 20,
    message: "Max Length is 20",
  },
};

export const validateID = {
  required: "Required",
  minLength: {
    value: 4,
    message: "Minimum Length is 4",
  },
  maxLength: {
    value: 150,
    message: "Max Length is 150",
  },
  validate: {
    itemDontExist: async (fieldValue) => {
      while (fieldValue.length >= 8) {
        const res = await fetch(
          `https://deployment-shopme.onrender.com/product/checkIfExist/${fieldValue}`
        );
        // `https://deployment-shopme.onrender.com/product/checkIfExist/${fieldValue}`
        const data = await res.json();
        return data.length === 0 || "Id dont Exist";
      }
    },
  },
};
export const validateLongObj = {
  // required : 'Required',
  minLength: {
    value: 4,
    message: "Minimum Length is 4",
  },
  maxLength: {
    value: 150,
    message: "Max Length is 150",
  },
};

export const companyObj = {
  minLength: {
    value: 2,
    message: "Minimum Length is 2",
  },
  maxLength: {
    value: 20,
    message: "Max Length is 20",
  },
};

export const brandObj = {
  minLength: {
    value: 2,
    message: "Minimum Length is 2",
  },
  maxLength: {
    value: 10,
    message: "Max Length is 10",
  },
};

export const categoryObj = {
  minLength: {
    value: 2,
    message: "Minimum Length is 2",
  },
  maxLength: {
    value: 10,
    message: "Max Length is 10",
  },
};

export const osObj = {
  minLength: {
    value: 2,
    message: "Minimum Length is 2",
  },
  maxLength: {
    value: 10,
    message: "Max Length is 10",
  },
};

export const priceInputProps = {
  endAdornment: (
    <InputAdornment position="end">
      <AttachMoneyIcon />
    </InputAdornment>
  ),
};
