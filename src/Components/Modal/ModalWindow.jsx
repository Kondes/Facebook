import React, { useState } from "react";
import "./ModalWindow.css";
import { auth } from "../FormAuth/firebase.js";
import { useNavigate, Link } from "react-router-dom";


function ModalWindow() {
  const navigate = useNavigate("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth.user) {
        auth.user.updateProfile({
          displayName: firstName + " " + lastName,
        }).then((s) => {
              navigate("/");
        })
      }
    })
        .catch((e) => {
          alert(e.message)
      })
  };

  return (
    <div>
      <div className="modalContainer">
        <div className="titleModalContainer">
          <div className="textTitleModalContainer">
            <h2 className="firstTextTitleModalContainer">Зареєструватись</h2>
            <p className="secondTextTitleModalContainer">Це швидко і просто.</p>
                  </div>
                  <Link to={'/login'}>   <button className="buttonTitleModalContainer">✕</button></Link>
       
        </div>
        <form action="">
          <div className="bodyModalContainer">
            <div className="nameBodyModalContainer">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Ім'я"
                className="inputBodyModalContainer"
                required
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Прізвище"
                className="inputBodyModalContainer"
                required
              />
            </div>
            <div className="passwordBodyModalContainer">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Номер телефону або ел.пошта"
                className="inputBodyModalContainer"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Новий пароль"
                className="inputBodyModalContainer"
                required
              />
            </div>
            <p className="subTitleBodyModalContainer">День народження</p>
            <div className="selectBodyModalContainer">
              <select
                className="selectBodyModalContainerInner"
                id="day"
                name="day"
              >
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                className="selectBodyModalContainerInner"
                id="month"
                name="month"
              >
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
              <select
                className="selectBodyModalContainerInner"
                id="year"
                name="year"
              >
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <p className="subTitleBodyModalContainer">Стать</p>
            <div className="selectBodyModalContainer">
              <div className="selectBodyModalContainerInner">
                <label>
                  <b>Жінка</b>
                </label>
                <input type="radio" name="gender" value="female" />
              </div>
              <div className="selectBodyModalContainerInner">
                <label>
                  <b>Чоловік</b>
                </label>
                <input type="radio" name="gender" value="male" />
              </div>
              <div className="selectBodyModalContainerInner">
                <label>
                  <b>Інше</b>
                </label>
                <input type="radio" name="gender" value="custom" />
              </div>
            </div>

            <p className="textBottomModalContainer">
              People who use our service may have uploaded your contact
              information to Facebook. <a href="">Learn more.</a>
            </p>
            <p className="textBottomModalContainer">
              By clicking Sign Up, you agree to our{" "}
              <a href="#"> Terms, Data Policy</a> and
              <a href="">Cookie</a>
              Policy. You may receive SMS notifications from us and can opt out
              at any time.
            </p>
            <div className="submitBottomModalContainer">
              <button onClick={register} type="submit" className="submit">
                Зареєструватись
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    // </div>
    // <div className="">
    //   <div className="">
    //     <div className="titleModalContainer">
    //       <div className="textTitleModalContainer">
    //         <h2 className="firstTextTitleModalContainer">Зареєструватись</h2>
    //         <p className="secondTextTitleModalContainer">Це швидко і просто.</p>
    //       </div>
    //       <button className="buttonTitleModalContaine">X</button>
    //     </div>

    //     <form action="">
    //       <div className="bodyModalContainer">
    //         {/* <center> */}
    //         <input
    //           type="text"
    //           placeholder="Ім'я"
    //           className="inputBodyModalContainer"
    //           required
    //         />

    //         <input
    //           type="text"
    //           placeholder="Прізвище"
    //           className="inputBodyModalContainer"
    //           required
    //         />
    //       </div>
    //       {/* </center> */}
    //       {/* <center> */}
    //       <input
    //         type="email"
    //         placeholder="Номер телефону або ел.пошта"
    //         className="inputBodyModalContainer"
    //         required
    //       />
    //       {/* </center> */}
    //       {/* <center> */}
    //       <input
    //         type="password"
    //         placeholder="Новий пароль"
    //         className="inputBodyModalContainer"
    //         required
    //       />
    //       {/* </center> */}
    //       <h4 className="">День народження</h4>
    //       <select className="register__date2">
    //         <option value="Day">Day</option>
    //         <option value="Day">1</option>
    //         <option value="Day">2</option>
    //         <option value="Day">3</option>
    //         <option value="Day">4</option>
    //         <option value="Day">5</option>
    //         <option value="Day">6</option>
    //         <option value="Day">7</option>
    //         <option value="Day">8</option>
    //         <option value="Day">9</option>
    //         <option value="Day">10</option>
    //         <option value="Day">11</option>
    //         <option value="Day">12</option>
    //         <option value="Day">13</option>
    //         <option value="Day">14</option>
    //         <option value="Day">15</option>
    //         <option value="Day">16</option>
    //         <option value="Day">17</option>
    //         <option value="Day">18</option>
    //         <option value="Day">19</option>
    //         <option value="Day">20</option>
    //         <option value="Day">21</option>
    //         <option value="Day">22</option>
    //         <option value="Day">23</option>
    //         <option value="Day">24</option>
    //         <option value="Day">25</option>
    //         <option value="Day">26</option>
    //         <option value="Day">27</option>
    //         <option value="Day">28</option>
    //         <option value="Day">29</option>
    //         <option value="Day">30</option>
    //         <option value="Day">31</option>
    //       </select>
    //       <select className="register__date3">
    //         <option value="Day">Month</option>
    //         <option value="Day">Jan</option>
    //         <option value="Day">Feb</option>
    //         <option value="Day">Mar</option>
    //         <option value="Day">Apr</option>
    //         <option value="Day">Jun</option>
    //         <option value="Day">Jul</option>
    //         <option value="Day">Aug</option>
    //         <option value="Day">Sep</option>
    //         <option value="Day">Oct</option>
    //         <option value="Day">Nov</option>
    //         <option value="Day">Dec</option>
    //       </select>
    //       <select className="register__date3">
    //         <option value="2018">2020</option>
    //         <option value="2018">2019</option>
    //         <option value="2018">2018</option>
    //         <option value="2017">2017</option>
    //         <option value="2016">2016</option>
    //         <option value="2015">2015</option>
    //         <option value="2014">2014</option>
    //         <option value="2013">2013</option>
    //         <option value="2012">2012</option>
    //         <option value="2011">2011</option>
    //         <option value="2010">2010</option>
    //         <option value="2009">2009</option>
    //         <option value="2008">2008</option>
    //         <option value="2007">2007</option>
    //         <option value="2006">2006</option>
    //         <option value="2005">2005</option>
    //         <option value="2004">2004</option>
    //         <option value="2003">2003</option>
    //         <option value="2002">2002</option>
    //         <option value="2001">2001</option>
    //         <option value="2000">2000</option>
    //         <option value="1999">1999</option>
    //         <option value="1998">1998</option>
    //         <option value="1997">1997</option>
    //         <option value="1996">1996</option>
    //         <option value="1995">1995</option>
    //         <option value="1994">1994</option>
    //         <option value="1993">1993</option>
    //         <option value="1992">1992</option>
    //         <option value="1991">1991</option>
    //         <option value="1990">1990</option>
    //         <option value="1989">1989</option>
    //         <option value="1988">1988</option>
    //         <option value="1987">1987</option>
    //         <option value="1986">1986</option>
    //         <option value="1985">1985</option>
    //         <option value="1984">1984</option>
    //         <option value="1983">1983</option>
    //         <option value="1982">1982</option>
    //         <option value="1981">1981</option>
    //         <option value="1980">1980</option>
    //         <option value="1979">1979</option>
    //         <option value="1978">1978</option>
    //         <option value="1977">1977</option>
    //         <option value="1976">1976</option>
    //         <option value="1975">1975</option>
    //         <option value="1974">1974</option>
    //         <option value="1973">1973</option>
    //         <option value="1972">1972</option>
    //         <option value="1971">1971</option>
    //         <option value="1970">1970</option>
    //         <option value="1969">1969</option>
    //         <option value="1968">1968</option>
    //         <option value="1967">1967</option>
    //         <option value="1966">1966</option>
    //         <option value="1965">1965</option>
    //         <option value="1964">1964</option>
    //         <option value="1963">1963</option>
    //         <option value="1962">1962</option>
    //         <option value="1961">1961</option>
    //         <option value="1960">1960</option>
    //         <option value="1959">1959</option>
    //         <option value="1958">1958</option>
    //         <option value="1957">1957</option>
    //         <option value="1956">1956</option>
    //         <option value="1955">1955</option>
    //         <option value="1954">1954</option>
    //         <option value="1953">1953</option>
    //         <option value="1952">1952</option>
    //         <option value="1951">1951</option>
    //         <option value="1950">1950</option>
    //         <option value="1949">1949</option>
    //         <option value="1948">1948</option>
    //         <option value="1947">1947</option>
    //         <option value="1946">1946</option>
    //         <option value="1945">1945</option>
    //         <option value="1944">1944</option>
    //         <option value="1943">1943</option>
    //         <option value="1942">1942</option>
    //         <option value="1941">1941</option>
    //         <option value="1940">1940</option>
    //         <option value="1939">1939</option>
    //         <option value="1938">1938</option>
    //         <option value="1937">1937</option>
    //         <option value="1936">1936</option>
    //         <option value="1935">1935</option>
    //         <option value="1934">1934</option>
    //         <option value="1933">1933</option>
    //         <option value="1932">1932</option>
    //         <option value="1931">1931</option>
    //         <option value="1930">1930</option>
    //         <option value="1929">1929</option>
    //         <option value="1928">1928</option>
    //         <option value="1927">1927</option>
    //         <option value="1926">1926</option>
    //         <option value="1925">1925</option>
    //         <option value="1924">1924</option>
    //         <option value="1923">1923</option>
    //         <option value="1922">1922</option>
    //         <option value="1921">1921</option>
    //         <option value="1920">1920</option>
    //         <option value="1919">1919</option>
    //         <option value="1918">1918</option>
    //         <option value="1917">1917</option>
    //         <option value="1916">1916</option>
    //         <option value="1915">1915</option>
    //         <option value="1914">1914</option>
    //         <option value="1913">1913</option>
    //         <option value="1912">1912</option>
    //         <option value="1911">1911</option>
    //         <option value="1910">1910</option>
    //         <option value="1909">1909</option>
    //         <option value="1908">1908</option>
    //         <option value="1907">1907</option>
    //         <option value="1906">1906</option>
    //         <option value="1905">1905</option>
    //       </select>
    //       <h4>Стать</h4>
    //       <div className="">
    //         <input type="radio" name="gender" value="female" />
    //         <label>Жінка</label>
    //         <input type="radio" name="gender" value="Male" />
    //         <label>Чоловік</label>
    //         <input type="radio" name="gender" value="Other" />
    //         <label>Інше</label>
    //       </div>
    //       <p className="textBottomModalContainer">
    //         People who use our service may have uploaded your contact
    //         information to Facebook. <a href="">Learn more.</a>
    //       </p>

    //       <p className="textBottomModalContainer">
    //         By clicking Sign Up, you agree to our
    //         <a href="#"> Terms, Data Policy</a> and <a href="">Cookie</a>
    //         Policy. You may receive SMS notifications from us and can opt out at
    //         any time.
    //       </p>
    //       <button type="submit" className="submit">
    //         Зареєструватися
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}
// const ModalWindow = ({active, setActive}) => {
//     return (
//         <div className={active ? "modalBackground active" : "modalBackground"} onClick={() => setActive(false)}>
//             <div className="modalContainer" onClick={e => e.stopPropagation()}>
//                 <div className="titleModalContainer">
//                     <div className="textTitleModalContainer">
//                         <h2 className="firstTextTitleModalContainer">Зареєструватись</h2>
//                         <p className="secondTextTitleModalContainer">Це швидко і просто.</p>
//                     </div>
//                     <button className="buttonTitleModalContainer">✕</button>
//                 </div>
//                 <div className="bodyModalContainer">
//                     <div className="nameBodyModalContainer">
//                     <input type="text" placeholder="Ім'я" className="inputBodyModalContainer" required/>
//                     <input type="text" placeholder="Прізвище" className="inputBodyModalContainer" required/>
//                     </div>
//                     <div  className="passwordBodyModalContainer">
//                     <input type="email" placeholder="Номер телефону або ел.пошта" className="inputBodyModalContainer"
//                            required/>
//                     <input type="password" placeholder="Новий пароль" className="inputBodyModalContainer" required/>
//                     </div>
//                     <p className="subTitleBodyModalContainer">День народження</p>
//                     <div className="selectBodyModalContainer">
//                         <select className="selectBodyModalContainerInner" id="day" name="day">
//                             <option value="01">01</option>
//                             <option value="02">02</option>
//                             <option value="03">03</option>
//                             <option value="04">04</option>
//                             <option value="05">05</option>
//                             <option value="06">06</option>
//                             <option value="07">07</option>
//                             <option value="08">08</option>
//                             <option value="09">09</option>
//                             <option value="10">10</option>
//                             <option value="11">11</option>
//                             <option value="12">12</option>
//                             <option value="13">13</option>
//                             <option value="14">14</option>
//                             <option value="15">15</option>
//                             <option value="16">16</option>
//                             <option value="17">17</option>
//                             <option value="18">18</option>
//                             <option value="19">19</option>
//                             <option value="20">20</option>
//                             <option value="21">21</option>
//                             <option value="22">22</option>
//                             <option value="23">23</option>
//                             <option value="24">24</option>
//                             <option value="25">25</option>
//                             <option value="26">26</option>
//                             <option value="27">27</option>
//                             <option value="28">28</option>
//                             <option value="29">29</option>
//                             <option value="30">30</option>
//                             <option value="31">31</option>
//                         </select>
//                         <select className="selectBodyModalContainerInner" id="month" name="month">
//                             <option value="january">January</option>
//                             <option value="february">February</option>
//                             <option value="march">March</option>
//                             <option value="april">April</option>
//                             <option value="may">May</option>
//                             <option value="june">June</option>
//                             <option value="july">July</option>
//                             <option value="august">August</option>
//                             <option value="september">September</option>
//                             <option value="october">October</option>
//                             <option value="november">November</option>
//                             <option value="december">December</option>
//                         </select>
//                         <select className="selectBodyModalContainerInner" id="year" name="year">
//                             <option value="1999">1999</option>
//                             <option value="2000">2000</option>
//                             <option value="2001">2001</option>
//                             <option value="2002">2002</option>
//                             <option value="2003">2003</option>
//                             <option value="2004">2004</option>
//                             <option value="2005">2005</option>
//                             <option value="2006">2006</option>
//                             <option value="2007">2007</option>
//                             <option value="2008">2008</option>
//                             <option value="2009">2009</option>
//                             <option value="2010">2010</option>
//                             <option value="2011">2011</option>
//                             <option value="2012">2012</option>
//                             <option value="2013">2013</option>
//                             <option value="2014">2014</option>
//                             <option value="2015">2015</option>
//                             <option value="2016">2016</option>
//                             <option value="2017">2017</option>
//                             <option value="2018">2018</option>
//                             <option value="2019">2019</option>
//                             <option value="2020">2020</option>
//                             <option value="2021">2021</option>
//                             <option value="2022">2022</option>
//                         </select>
//                     </div>
//                     <p className="subTitleBodyModalContainer">Стать</p>
//                     <div className="selectBodyModalContainer">
//                         <div className="selectBodyModalContainerInner">
//                             <label><b>Жінка</b></label>
//                             <input type="radio" name="gender" value="female"/>
//                         </div>
//                         <div className="selectBodyModalContainerInner">
//                             <label><b>Чоловік</b></label>
//                             <input type="radio" name="gender" value="male"/>
//                         </div>
//                         <div className="selectBodyModalContainerInner">
//                             <label><b>Інше</b></label>
//                             <input type="radio" name="gender" value="custom"/>
//                         </div>

//                     </div>

//                     <p className="textBottomModalContainer">People who use our service may have uploaded your contact information to Facebook. <a href="">Learn
//                         more.</a></p>
//                     <p className="textBottomModalContainer">
//                         By clicking Sign Up, you agree to our <a href="#"> Terms, Data Policy</a> and
//                         <a href="">Cookie</a>
//                         Policy. You may receive SMS notifications from us and can opt out at any time.
//                     </p>
//                     <div className="submitBottomModalContainer">
//                     <input type="submit" value="Зареєструватись" className="submit"/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default ModalWindow;
