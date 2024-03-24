import Input from "@/ui/input";
import Textarea from "@/ui/textarea";

import Photos from "./ui/photos";

export default function Advertise() {
  return (
    <form className="space-y-6 px-4 py-6">
      <h1 className="text-xl font-bold leading-none">Place Ad</h1>

      <label className="grid gap-y-2">
        <span className="select-none font-bold leading-none">Category</span>
        <select name="" className="input" tabIndex={1}>
          <option value="">Car</option>
          <option value="">Motorcycle</option>
          <option value="">Airplane</option>
        </select>
      </label>

      <Input label="Name" required spellCheck tabIndex={2} />

      <Textarea
        label="Description"
        maxLength={1000}
        rows={5}
        spellCheck
        tabIndex={3}
        required
      />

      <Input label="Price" type="number" min={1} required tabIndex={4} />

      <label className="mt-4 flex w-fit items-center gap-x-2">
        <span className="order-2 select-none font-bold leading-none">
          Accept price offers
        </span>
        <input
          type="checkbox"
          className="order-1 rounded border border-stone-400"
          tabIndex={5}
        />
      </label>

      <Photos />

      <button className="button w-full bg-orange-500 text-white" tabIndex={6}>
        Post
      </button>
    </form>
  );
}
