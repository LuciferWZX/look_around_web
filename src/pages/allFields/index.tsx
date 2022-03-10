import {FC} from "react";
import { StyledAllFields } from "@/pages/allFields/style";
import { FieldCard } from "@/components";


const AllFields:FC=()=>{
  return(
    <StyledAllFields>
      AllFields
      <FieldCard />
      <FieldCard />
      <FieldCard />
      <FieldCard />
      <FieldCard />
      <FieldCard />
      <FieldCard />
    </StyledAllFields>
  )
}
export default AllFields
