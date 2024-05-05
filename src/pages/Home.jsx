import Card from "../components/Card";
import data from "../json/file.json";
const Home = () => {
  return (
    <div className="flex bg-white flex-wrap box-border m-10 p-10 gap-3 justify-center ">
      {data.map((e) => (
        <Card key={e.id} name={e.name} hex={e.hex} />
      ))}
    </div>
  );
};

export default Home;
