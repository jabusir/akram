import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function MyAccordion({ item, children }) {
  return (
    <Accordion allowZeroExpanded allowMultipleExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{item.title}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>{children}</AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
