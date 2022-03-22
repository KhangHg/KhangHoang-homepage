import Link from "next/link";
import Image from "next/image";
import { DarkMode, Text, useColorModeValue } from "@chakra-ui/react";
import styled  from "@emotion/styled";
import banana from"../images/banana.png"

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
    // const banana = `/images/footprint${useColorModeValue('', '-dark')}.png`
    return(
        <Link href="/">
            <a>
                {/* <LogoBox>
                    <Image  src={banana} width={20}  height={800} alt="logo"/> */}
                <Text
                color={useColorModeValue('gray.800', 'whitAlpha.900')}
                fontFamily='M PLUS Rounded 1c'
                fontWeight={"bold"}
                ml={3}
                >
                Khang Hoang    
                </Text> 
                {/* </LogoBox> */}
            </a>
        </Link>
    )
}

export default Logo