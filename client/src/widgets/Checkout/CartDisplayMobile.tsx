import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../features/cartSlice";
import { Box, Button } from "@mui/material";
import baseRenderUrl from "../../assets/baseUrl";
// Icons import:
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartDisplayMobile = () => {
  const { cart } = useSelector((state: any) => state.allCart);
  const dispatch = useDispatch();

  return (
    <Box className="ScrollCartStyle" sx={{ overflow: "hidden", width: "100%" }}>
      <Box sx={childContainer1}>
        <ul>
          {cart?.map((product: any) => {
            return (
              <li key={product._id} style={liStyle}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    width: "100%",
                    marginBottom: "12px",
                    marginTop: "10px",
                  }}
                >
                  <img
                    style={{
                      objectFit: "cover",
                      borderRadius: "15px",
                      marginBottom: "12px",
                      marginTop: "10px",
                    }}
                    src={`${baseRenderUrl}/product/readProducts/${product.image}`}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <div>
                    <p
                      style={{
                        marginLeft: "10px",
                        fontSize: "20px",
                        marginTop: "18px",
                      }}
                    >
                      {product.productName}
                    </p>
                    <p
                      style={{
                        color: "grey",
                        textAlign: "left",
                        marginLeft: "11px",
                        marginTop: "5px",
                      }}
                    >
                      {product.price} $
                    </p>
                    <div style={{ marginLeft: "-10px", marginTop: "15px" }}>
                      <Button
                        onClick={() => {
                          dispatch(decrementQuantity(product));
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <span>{product.itemQuantity}</span>
                      <Button
                        onClick={() => {
                          dispatch(incrementQuantity(product));
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    dispatch(removeItem(product));
                  }}
                ></div>
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
};

export default CartDisplayMobile;

const childContainer1 = {
  justifyContent: "space-between",
  width: "100%",
  height: "450px",
  overflowY: "scroll",
  overflowX: "hidden",
  display: { xs: "flex", sm: "flex", md: "flex" },
};

const liStyle: React.CSSProperties = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
};
