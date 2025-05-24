import { Tabs } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

function CreateMovie() {
  return (
    <>
      <h2>CreateMovie</h2>

      <StyledSection>
        <Tabs.Root defaultValue="members">
          <Tabs.List>
            <Tabs.Trigger value="members">
              <LuUser />
              Members
            </Tabs.Trigger>
            <Tabs.Trigger value="projects">
              <LuFolder />
              Projects
            </Tabs.Trigger>
            <Tabs.Trigger value="tasks">
              <LuSquareCheck />
              Settings
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="members">Manage your team members</Tabs.Content>
          <Tabs.Content value="projects">Manage your projects</Tabs.Content>
          <Tabs.Content value="tasks">
            Manage your tasks for freelancers
          </Tabs.Content>
        </Tabs.Root>
      </StyledSection>
    </>
  );
}

export default CreateMovie;
