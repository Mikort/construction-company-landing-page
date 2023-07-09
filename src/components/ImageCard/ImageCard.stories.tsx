import { ImageCard, ImageCardProps } from "./ImageCard";
import builder from "images/builder.jpg";
import { Stack } from "components/Stack/Stack";
import { Article } from "components/Article/Article";
import { Text } from "components/Text/Text";
import { Button } from "components/Button/Button";
import { useTextStyleClasses } from "components/Text/useTextStyleClasses";
import { StoryFn } from "@storybook/react";
import { useResize } from "hooks/useResize";

export default {
  title: "ImageCard",
  component: ImageCard,
};

export const Default: StoryFn<ImageCardProps> = () => {
  const size = useResize();

  return (
    <ImageCard imageSrc={builder}>
      <Stack
        justifyContent="space-between"
        alignItems={size.width > 550 ? "center" : "start"}
        direction={size.width > 550 ? "row" : "column"}
        isShrinking
        gap="8px"
      >
        <Article maxWidth="460px">
          <Text
            lineHeight="32px"
            fontSize="16px"
            fontWeight={size.width > 550 ? "700" : "400"}
            color={size.width > 550 ? "secondary-0" : "secondary-1000"}
            type="h6"
          >
            Принимая во&nbsp;внимание показатели успешности, перспективное
            планирование способствует подготовке и&nbsp;реализации новых
            принципов
          </Text>
        </Article>
        <Button
          isTransparent={size.width > 550}
          color="primary"
          onClick={() => {}}
          size="small"
          className={useTextStyleClasses({
            lineHeight: "20px",
            fontSize: size.width > 550 ? "16px" : "12px",
            fontWeight: "700",
            color: "secondary-0",
          })}
        >
          Подробнее
        </Button>
      </Stack>
    </ImageCard>
  );
};
