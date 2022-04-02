import Image from "next/image";
import firsthalf from "../public/images/newsLetterImg/halfiphone1.png";
import secondhalf from "../public/images/newsLetterImg/halfiphone2.png";

export default function Newsletter() {
  return (
    <div className="text-white md:p-10 bg-gradient-to-r from-[#E8A980]	 to-[#6A54EF] flex flex-row ">
      <div className="flex flex-row ">
        <div className="pt-36">
          {" "}
          <Image width="382px" height="400px" src={firsthalf} />
        </div>
      </div>
      <div>
        <h1>Subscribe Newsletter</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
      </div>
    </div>
  );
}
