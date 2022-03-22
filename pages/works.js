import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbInkdrop from"../images/Kekkaishi.jpg";
import MyPic from "../images/avata.jpg";
import yoshimori from"../images/Yoshimori.jpg"

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize = {20} mb = {4}>
                Works
            </Heading>
        
        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section delay={0.3}>
                <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                    An App
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
                <WorkGridItem id="me" title="Photograph" thumbnail={thumbInkdrop}>
                    My Pic
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
                <WorkGridItem id="yoshimori" title="Yoshimori" thumbnail={yoshimori}>
                    My Pic
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
                <WorkGridItem id="yoshimori" title="Yoshimori" thumbnail={yoshimori}>
                    My Pic 2
                </WorkGridItem>
            </Section>
        </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works