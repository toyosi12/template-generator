import { useTemplateContext } from "../../contexts/TemplateContext";

const MainView = () => {
  const { currentTemplate } = useTemplateContext();
  return <currentTemplate.template />;
};
export default MainView;
