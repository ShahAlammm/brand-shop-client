import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "../../Components/CardDetails/CardDetails";
import SimpleBanner from "../../Components/Header/Banner/SimpleBanner";


const ViewDetails = () => {
  const [details, setDetails] = useState();

  const { id } = useParams();

  const elements = useLoaderData();

  useEffect(() => {
    const findItem = elements?.find((details) => details.id == id);

    setDetails(findItem);
  }, [id, elements]);
  return (
    <div>
        <SimpleBanner></SimpleBanner>
      <CardDetails details={details}></CardDetails>
    </div>
  );
};

export default ViewDetails;
