"use client";
import svgs from "@/_assets/svgs";
import { globalFontSize } from "@/app/utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ClientsExperiencesCardProps {
  quote: string;
  name: string;
  date: string;
  clientImage: string;
}

const ClientsExperiencesCard: React.FC<ClientsExperiencesCardProps> = ({
  quote,
  name,
  date,
  clientImage,
}) => {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        height: "auto",
        maxWidth: { xs: "258px", xxl: "320px" },
        width: "100%",
        textAlign: "center",
        margin: "auto",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          padding: "25px 25px 50px 25px",
          height: { xs: "270px", xxl: "340px" },
        }}
      >
        <Box sx={{ width: "50px", height: "auto", margin: "auto" }}>
          <Image
            style={{ height: "100%", width: "100%" }}
            src={svgs.QuotationImage}
            alt="Quotation"
          />
        </Box>
        <Typography
          sx={{
            fontSize: globalFontSize.p3,
            color: "#00000080",
            // ellipsis there
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {quote}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "-30px",
        }}
      >
        <Box sx={{ width: "62px", height: "auto", margin: "auto" }}>
          <Image
            style={{ height: "100%", width: "100%" }}
            src={clientImage}
            width={62}
            height={62}
            alt="Client"
            unoptimized={true}
          />
        </Box>
        <Typography
          sx={{
            color: "#074592",
            fontWeight: "500",
            fontSize: globalFontSize.p3,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#565656",
            fontSize: globalFontSize.p5,
          }}
        >
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClientsExperiencesCard;
