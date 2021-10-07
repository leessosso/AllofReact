import './App.css';
import ControlledComponent from './components/2-10.Form/ControlledComponent';
import Composition from './components/2-4.Props/Composition';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';
import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
import Event from './components/2-7.Event/Event';
import Condition from './components/2-8.ConditionalRendering/Condition';
import Reducer from './components/3-3.Hooks/Reducer';
import State from './components/3-3.Hooks/State';
import WelcomeDialog from './components/3-5.Composition/WelcomeDialog';
import Dialog from './components/3-6.Composition2/Dialog';
import ThankyouDialog from './components/3-6.Composition2/ThankyouDialog';

function App() {
  return (
    <div className="App">
      <ThankyouDialog />
      {/* <Dialog /> */}
      {/* <WelcomeDialog /> */}
      {/* <Reducer /> */}
      {/* <State /> */}
      {/* <ControlledComponent /> */}
      {/* <Condition /> */}
      {/* <Event/> */}
      {/* <Composition /> */}
      {/* <Extraction /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
      {/* <ClassComponent2 />  */}
    </div>
  );
}

export default App;
