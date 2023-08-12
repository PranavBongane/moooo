import React, { useState } from "react";
import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";

const AboutComponent = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <>
      <Flex direction={"row"} gap="15" mt="10" ml="25vh">
        <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image
            src="https://i.pinimg.com/originals/28/1e/b6/281eb636323f7db9f1b72f23ecf61d2a.jpg"
            alt="Placeholder Image"
          />

          <Box p="6">
            <Text fontWeight="bold" fontSize="xl" mb="4">
              Gir Cow Information
            </Text>
            <Text mb="4">
              The Gir cow is a famous Indian-born dairy cattle breed. Gir's
              cattle native tract is Gir hills and forests of Kathiawar. This
              includes Gujarat districts of Amreli, Bhavnagar, Junagadh, and
              Rajkot. The name of the breed comes from the forest of Gir.
              Outside India, gir cattle is also very popular. This breed was
              imported by the United States, Mexico, Venezuela and Brazil. And
              successfully they're being bred there. The breed was also one of
              North America's cattle breeds used to grow the Brahman cattle.
            </Text>
            {showText && (
              <Text>
                They've a prominent Hip Bone and high Hump that differs from
                other Cow breed. Do you know that the HUMP in GIR Cow has a
                specific vein called "Surya Ketu Nadi" that is missing in Non
                Gir cow and Hybrid cow. Surya Ketu Nadi (Vein) produces gold
                salts in its blood when dealing with solar rays. Such salts are
                in the milk of the cow and the other body fluids of the cow.
                Because of the milk, butter and ghee of the Gir cow have a
                natural golden colour. In Ayurveda, Gir cow's milk, Ghee, Curd,
                Urine and Dung together is known as ‘Panchgavya’.
              </Text>
            )}
            <Button mt="4" onClick={handleClick}>
              {showText ? "Hide Text" : "Show More Text"}
            </Button>
          </Box>
        </Box>

        <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image
          p="9vh"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJ97nK1mLOsTrceFhvBEM-n_UP5W6_az7qGJpaoluOA&usqp=CAU&ec=48665701"
            alt="Placeholder Image"
          />

          <Box p="6">
            <Text fontWeight="bold" fontSize="xl" mb="4">
              A2 Milk Ghee Benefits
            </Text>
            <Text mb="4">
              Rich in Vitamins: Pure desi ghee is rich source of Vitamin A, D, E
              & K. These vitamins are good for babies eyes, skin, health and
              immunity. GirOrganic A2 ghee has all the qualities required for
              better child growth. Good for Lactose intolerant baby: GirOrganic
              A2 ghee is 100% Pure and without impurities, it is better option
              for baby than other dairy products. It also has A2 beta casein
              protein that helps baby to increase its immune system. Strong
              Bones: Vitamin K in Pure cow Ghee helps in producing calcium in
              the body which is responsible for strengthening the bones.
            </Text>
            {showText && (
              <Text>
                Digestion:Ghee's saturated fatty acids are condensed fats and
                can be easily absorbed by the baby's body, so there are no
                digestion related to problems in baby. Provides energy:A growing
                baby needs a lot of calories for his quest to discover the
                universe to start. To always be on the move, pure desi ghee can
                be the best friend of your baby when it comes to energy supply.
                We can also call A2 ghee as super power food. Weight Gain:Most
                mothers worry about the underweight of their baby. Even though
                every child is different, ghee is the solution if you're looking
                for something to help your child get some weight. It's a healthy
                way to get saturated fats that can help the baby gain weight.
              </Text>
            )}
            <Button mt="4" onClick={handleClick}>
              {showText ? "Hide Text" : "Show More Text"}
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default AboutComponent;
