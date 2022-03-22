import { extendTheme, Link } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7bd','#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-tittle': {
                textDecoderation: 'underline',
                fontSize: 20,
                textUnderLineOffSet: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBotton: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderLineOffSet: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    glassTeal: '#88ccca'
}

const  config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles, 
    components,
    colors, 
    fonts
})

export default theme