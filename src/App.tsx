import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css';
import AgendaContainer from "./features/Agenda/AgendaContainer";

const App:React.FC =()=> {
  return (
    <div className="App">
        <div>
        <AgendaContainer />
      </div>
    </div>
  );
}

export default App;