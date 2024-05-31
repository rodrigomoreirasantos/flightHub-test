import { Card, CardContent } from "@/app/_components/ui/card";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Card className="rounded-t-none">
        <CardContent className="p-5 justify-between items-center">
          <Image
            src="/logo-flighthub.svg"
            alt="FlightHub Logo"
            height={18}
            width={120}
          />
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
