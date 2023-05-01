import Button from "@/components/Button";
import Title from "@/components/Title";

const index = () => {
  return (
    <main className="w-full min-h-screen flex flex-col gap-y-4 justify-center items-center">
      <Title label="Button Stories" bold />
      <div className="flex gap-3 mt-4">
        <Button label="Button" />
        <Button label="Button" variant="primary" />
        <Button label="Button" variant="secondary" />
        <Button label="Button" size="sm" />
        <Button label="Button" size="lg" />
      </div>
    </main>
  );
};

export default index;
