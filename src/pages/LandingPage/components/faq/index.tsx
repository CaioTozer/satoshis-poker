import { Minus, Plus } from "lucide-react";
import {
    Answer,
    Container,
    FaqContainer,
    FaqHeader,
    FaqIndex,
    IconContainerMinus,
    IconContainerPlus,
    Question,
    QuestionAnswer,
    Title,
    TitleIndex
} from "./styles";
import { faq } from "./utils";
import { useState } from "react";
import { colors } from "@/styles/colors";

export default function FAQ() {
    const [expandedIndex, setExpandedIndex] = useState<number[]>([]);

    const toggleFAQ = (index: number) => {
        if (expandedIndex.includes(index)) {
            const filteredArrayIndex = expandedIndex.filter((item) => item !== index)

            setExpandedIndex(filteredArrayIndex)
            return;
        }

        setExpandedIndex([...expandedIndex, index])

    };

    const faqList = faq.map((faqItem, index) => {

        return (
            <FaqContainer onClick={() => toggleFAQ(index)}>
                <FaqHeader>
                    <TitleIndex>
                        <FaqIndex>
                            {index + 1}
                        </FaqIndex>
                        <QuestionAnswer>
                            <Question>{faqItem.question}</Question>
                            {expandedIndex.includes(index) &&
                                <Answer>{faqItem.answer}</Answer>
                            }
                        </QuestionAnswer>
                    </TitleIndex>

                    {expandedIndex.includes(index) ?
                        <IconContainerMinus>
                            <Minus color={colors.background} />
                        </IconContainerMinus>
                        :
                        <IconContainerPlus>
                            <Plus />
                        </IconContainerPlus>
                    }
                </FaqHeader>
            </FaqContainer>
        )
    })

    return (
        <Container id="FAQ">
            <Title>Perguntas Frequentes</Title>
            {faqList}
        </Container>
    )
}