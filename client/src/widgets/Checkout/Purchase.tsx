import {useState } from "react";
import Cards from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Grid,Box ,TextField} from "@mui/material";

const Purchase = () => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [date, SetDate] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState<any>("");
 
  return (
    <>
      {/* <div className="rccs__card backcolor">

      <div className="rccs__card rccs__card--unknown" style={{height:'100px'}}>
        <Cards
          number={number}
          name={name}
          expiry={date}
          cvc={cvc}
          focused={focus}
        />
      </div>

      <br />
      <form>
        <div className="row">
          <div className="col-sm-11">
            <label htmlFor="name">Card Number</label>
            <input
              type="text"
              className="form-control"
              value={number}
              name="number"
              onChange={(e) => {
                SetNumber(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-11">
            <label htmlFor="name">Card Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="name">Expiration Date</label>
            <input
              type="text"
              name="expiry"
              className="form-control"
              value={date}
              onChange={(e) => {
                SetDate(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
          <div className="col-sm-5">
            <label htmlFor="name">CVV</label>
            <input
              type="tel"
              name="cvc"
              className="card"
              value={cvc}
              onChange={(e) => {
                SetCvc(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
      </form>
      </div> */}
      <Cards
          number={number}
          name={name}
          expiry={date}
          cvc={cvc}
          focused={focus}
        />
       <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                size="small"
                  required
                  fullWidth
                  id="Card Number"
                  label="Card Number"
                  inputProps={{ maxLength: 16 }}
                  autoFocus
                  value={number}
                  name="number"
                  type="text"
                  onChange={(e) => {
                    SetNumber(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                size="small"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  inputProps={{ maxLength: 12 }}
                  name="name"
                  autoComplete="full-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    SetName(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </Grid>
             
              <Grid item xs={12} sm={6}>
                <TextField
                size="small"
                  required
                  fullWidth
                  id="expiry"
                  inputProps={{ maxLength: 4 }}
                  label="Expiration Date"
                  name="expiry"
                  autoComplete="expiry"
                  type="text"
                  value={date}
                  onChange={(e) => {
                    SetDate(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </Grid>
      
              <Grid item xs={12} sm={6}>
                <TextField
                size="small"
                  required
                  fullWidth
                  name="cvc"
                  label="CVV"
                  id="cvc"
                  autoComplete="cvc"
                  inputProps={{ maxLength: 3 }}
                  type="tel"
                  value={cvc}
                  onChange={(e) => {
                    SetCvc(e.target.value);
                  }}
                  onFocus={(e) => SetFocus(e.target.name)}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                size="small"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
          </Box>
    </>
  );
};
export default Purchase;
