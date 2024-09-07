import React, { useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { useRouter } from "next/router";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  IconButton,
  Button,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContactUs from "./Home/ContactUs";

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [expandedRows, setExpandedRows] = useState({});
  const router = useRouter()

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleRowExpansion = (index) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [index]: !prevExpandedRows[index],
    }));
  };

  const pricingData = [
    {
      software: "Web Application",
      type: "Blogs",
      description: "News App, Portfolio, Posts...",
      price: "3000/-",
    },
    {
      software: "Web Application",
      type: "Service Booking",
      description: "Medical, IT, Digital Marketing...",
      price: "5000/-",
    },
    {
      software: "Web Application",
      type: "E-commerce",
      description: "E-Commerce, User Management...",
      price: "8000/-",
    },
    {
      software: "Web Application",
      type: "Accounting",
      description: "Medical, IT, Digital Marketing...",
      price: "12,000/-",
    },
    {
      software: "Android App",
      type: "Depends",
      description: "Depends",
      price: "5000/-",
    },
    {
      software: "IOS App",
      type: "Depends",
      description: "Depends",
      price: "5000/-",
    },
  ];

  return (
    <>
      <div className="px-4 my-4 w-full overflow-x-visible">
        <Table>
          <TableBody>
            {pricingData.map((item, index) => (
              <React.Fragment key={index}>
                <TableRow
                  onClick={() => toggleRowExpansion(index)}
                  className="cursor-pointer"
                >
                  <TableCell>
                    {isMobile ? (
                      <strong>{item.type}</strong>
                    ) : (
                      <>
                        <strong>{item.software}</strong>
                      </>
                    )}
                  </TableCell>
                  {!isMobile && (
                    <>
                      <TableCell>
                        <strong>{item.type}</strong>
                      </TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell className="flex ">
                        <MdCurrencyRupee className="mt-[3px] mr-2" />
                        {item.price}
                      </TableCell>
                    </>
                  )}
                </TableRow>
                {isMobile && (
                  <TableRow>
                    <TableCell colSpan={4} style={{ padding: 0 }}>
                      <Collapse
                        in={expandedRows[index]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <div className="p-2">
                          <p>
                            <strong>Software:</strong> {item.software}
                          </p>
                          <p>
                            <strong>Description:</strong> {item.description}
                          </p>
                          <p className="flex items-center">
                            <strong>Price:</strong>
                            <MdCurrencyRupee className="mt-[3px] mr-2" />
                            {item.price}
                          </p>
                        </div>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-center items-center">
          <Button
            variant="contained"
            style={{ marginTop: 4 }}
            onClick={() => router.push("/Contactus")}
          >
            Contact for more pricing Details
          </Button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
