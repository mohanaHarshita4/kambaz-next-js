/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export const MODULE_SERVER = `${HTTP_SERVER}/api/modules`;

// -----------------------------
// MODULE CRUD
// -----------------------------

export const deleteModule = async (moduleId: string) => {
  const res = await axiosWithCredentials.delete(
    `${MODULE_SERVER}/${moduleId}`
  );
  return res.data;
};

export const updateModule = async (module: any) => {
  const res = await axiosWithCredentials.put(
    `${MODULE_SERVER}/${module._id}`,
    module
  );
  return res.data;
};
