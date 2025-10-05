import Card from "../components/Card"
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
<Card />
    </div>
  )
}
export default Landing

import Button from "../components/Button"

<div className="flex gap-3 mt-5">
  <Button title="Small" size="small" shape="rounded-sm" />
  <Button title="Medium" size="medium" shape="rounded-md" />
  <Button title="Large" size="large" shape="rounded-full" />
</div>
