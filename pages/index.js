import Page from "../components/Page";
import MainCard from "../components/MainCard";
import Header from "../components/Header";
import NewTaskButton from "../components/NewTaskButton";
import NewCategoryButton from "../components/NewCategoryButton";
import NewSearchButton from "../components/NewSearchButton";
import Panel from "../components/Panel";
import PanelTaskList from "../components/PanelTaskList";

export default function Home() {

  return (
    <Page>
      <MainCard>
          <Header/>
          <NewSearchButton/>
          <NewTaskButton/>
          <NewCategoryButton/>
          <Panel
              open={true}
              title={"Painel - "}//add userName
              backgroundColor={"rgba(49,8,68,0.91)"}
          >
              <PanelTaskList
                  open={true}
                  title={"Pendente"}//add userName
                  backgroundColor={"#c5c820"}
              >
                  <PanelTaskList
                      open={true}
                      title={"Levar cachorro para caminhar"}//add userName
                      backgroundColor={"rgba(49,8,68,0.91)"}
                  />
                  <PanelTaskList
                      open={true}
                      title={"Ir ao mercado"}//add userName
                      backgroundColor={"rgba(49,8,68,0.91)"}
                  />
                  <PanelTaskList
                      open={true}
                      title={"Dentista"}//add userName
                      backgroundColor={"rgba(49,8,68,0.91)"}
                  />
              </PanelTaskList>
              <PanelTaskList
                  open={false}
                  title={"Iniciado"}//add userName
                  backgroundColor={"#003a90"}
              />
              <PanelTaskList
                  open={false}
                  title={"Concluido"}//add userName
                  backgroundColor={"#008a69"}
              />
              <PanelTaskList
                  open={false}
                  title={"Cancelado"}//add userName
                  backgroundColor={"#ff2525"}
              />

          </Panel>
      </MainCard>
    </Page>
  )
}
