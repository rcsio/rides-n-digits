import axios from "@/lib/axios";
import useSWR from "swr";

export default function useUser() {
  return useSWR("/api/user", (url) => axios.get(url).then((r) => r.data));
}
