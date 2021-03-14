import data from "./data";
import Card from "./Card";

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-lg-4" key={item.id}>
                <Card
                  title={item.title}
                  price={item.price}
                  users={item.users}
                  storage={item.storage}
                  public_projects={item.public_projects}
                  access={item.access}
                  private_projects={item.private_projects}
                  phone_support={item.phone_support}
                  subdomain={item.subdomain}
                  status_report={item.status_report}
                ></Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
