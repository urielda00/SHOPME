import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import { Box, Button, IconButton } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import ErrorMessages from "./ErrorMessages";
import DialogIs from "./DialogIs";
import { useState } from "react";
// const userName= window.sessionStorage.getItem('userNameHere');
import baseRenderUrl from "../../assets/baseUrl";
// Style import:
import { liStyle, containerStyle } from "../../styles/CartPage/CartSScreen";

const CartSScreen = () => {
  const { cart, totalQuantity, totalPrice, warningMessage } = useSelector(
    (state: any) => state.allCart
  );
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Box sx={containerStyle}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ textAlign: "center" }}>
          <h1 style={{ color: "black", fontFamily: '"Tilt Prism", cursive' }}>
            SHOPPING CART
          </h1>
          <div style={{ border: "1px solid black" }}></div>
        </Box>
        {/* case of warning message */}
        {warningMessage && <ErrorMessages />}
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ color: "grey" }}>Total Items: {totalQuantity}</p>
          </div>
          <div>
            <p style={{ color: "grey" }}>Total Price: {totalPrice} $</p>
          </div>
        </Box>
        {/* case the cart is empty: */}
        {cart.length === 0 ? (
          <div style={{ marginBottom: "-10px" }}>
            <div
              style={{
                marginTop: "35px",
                fontSize: "20px",
                color: "grey",
                marginBottom: "-100px",
              }}
            >
              The cart is empty
            </div>
            <Link to="/productsList" style={{ color: "black" }}>
              <IconButton
                style={{
                  marginTop: "100px",
                  color: "black",
                  marginBottom: "-155px",
                }}
                size="small"
              >
                <KeyboardReturnIcon />
                Back to shop
              </IconButton>
            </Link>
          </div>
        ) : (
          <Link to="/productsList" style={{ color: "black" }}>
            <IconButton
              style={{ marginTop: "15px", color: "black" }}
              size="small"
            >
              <KeyboardReturnIcon />
              Back to shop
            </IconButton>
          </Link>
        )}
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5px",
            overflow: "scroll",
            height: "50vh",
            borderRadius: "10px",
          }}
        >
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
                >
                  <Button style={{ color: "black" }}>
                    <CloseIcon fontSize="small" />
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <input
          type="text"
          style={{
            width: "80%",
            height: "35px",
            marginTop: "20px",
            color: "#fff",
            backgroundColor: "#332D2D",
            border: "none",
            borderRadius: "5px",
            textIndent: "10px",
          }}
          placeholder="Enter Your Coupon"
        />

        <Box
          sx={{
            display: "flex",
            width: "80%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DialogIs open={dialogOpen} />
          {cart.length < 1 ? (
            <Button
              onClick={() => {
                setDialogOpen(true);
                setTimeout(() => {
                  setDialogOpen(false);
                }, 1000);
              }}
              style={{
                textAlign: "center",
                width: "100%",
                height: "35px",
                marginTop: "10px",
              }}
              sx={{
                color: "#fff",
                bgcolor: "#332D2D",
                ":hover": {
                  color: "black",
                  bgcolor: "#AF5",
                },
              }}
            >
              Checkout
            </Button>
          ) : (
            <Link to="/checkout">
              <Button
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "35px",
                  marginTop: "10px",
                }}
                sx={{
                  color: "#fff",
                  bgcolor: "#332D2D",
                  ":hover": {
                    color: "black",
                    bgcolor: "#AF5",
                  },
                }}
              >
                Checkout
              </Button>
            </Link>
          )}

          {!user && (
            <Link to="/register">
              <Button
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "35px",
                  marginTop: "10px",
                }}
                sx={{
                  color: "#fff",
                  bgcolor: "#332D2D",
                  ":hover": {
                    color: "black",
                    bgcolor: "#AF5",
                  },
                }}
              >
                Register
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default CartSScreen;
