import { redirect } from "next/navigation";

const default_category = "01";

export default function Home() {
  redirect(`/category/${default_category}`)

}
