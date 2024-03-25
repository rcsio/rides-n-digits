import Checkbox from "@/ui/checkbox";
import Input from "@/ui/input";
import Textarea from "@/ui/textarea";

import Photos from "./ui/photos";

export default function Advertise() {
  return (
    <form className="space-y-6 px-4 py-6">
      <h1 className="text-xl font-bold">Place Ad</h1>

      <div className="grid gap-y-1">
        <label htmlFor="category" className="justify-self-start">
          Category
        </label>
        <select name="category" id="category" className="input" tabIndex={1}>
          <option value="">Car</option>
          <option value="">Motorcycle</option>
          <option value="">Airplane</option>
        </select>
      </div>

      <Input label="Name" name="name" required spellCheck tabIndex={2} />

      <Textarea
        label="Description"
        name="description"
        maxLength={1000}
        rows={5}
        spellCheck
        tabIndex={3}
        required
      />

      <Input
        label="Price"
        name="price"
        type="number"
        min={1}
        required
        tabIndex={4}
      />

      <Checkbox name="price-offers" tabIndex={5}>
        I want to receive price offers
      </Checkbox>

      <Photos />

      <button className="button w-full bg-orange-500 text-white" tabIndex={6}>
        Post
      </button>
    </form>
  );
}
