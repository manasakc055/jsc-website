<template>
    <!-- col1 -->
    <div class=" side-bar col-sm-3 pt-5">
        <div class="position-sticky top-0">
            <h3>About Tax</h3>
            <hr />
            <ul>

                
                <li >
                    <RouterLink to="/sub/1">What is Tax?</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sub/2">Direct Tax in India</RouterLink>
                  
                </li>
                <li>
                    <RouterLink to="/sub/3">Difference between Direct and Indirect Taxes </RouterLink>
                </li>
                <li> 
                    <RouterLink to="/sub/4">Goods and Service Tax(GST)</RouterLink>
                </li>
                <li> 
                    <RouterLink to="/sub/5">Capital Gains Tax(CGT)</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sub/6">Capital Gain Tax on Shares</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sub/7">Advance Tax</RouterLink>
                </li>
                <li> 
                    <RouterLink to="/sub/8">Income Tax for FY 2017-18 |Check Slab Rates,Calculation & News</RouterLink>
                </li>
            </ul>
            <!-- form -->
<!-- 
            <div class="row">
                <div class="container">
                    <form class="f" href="#">
                        <div class="send-form">
                            <h4>Contact Us</h4>

                            <input type="text" placeholder="Name*">
                            <input type="text" placeholder="Phone*">
                            <input type="text" placeholder="Email*">
                            <input type="text" placeholder="Message*" class="msg">
                            <button type="submit">Submit Now</button>
                        </div>

                    </form>
                </div>

            </div> -->
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            name: "sidemenu",
         

        }
    }
}

</script>
<style scoped>

/* col1 */
h3 {
    color: rgb(0, 84, 139);
    font-weight: 700;

}
.side-bar ul {
    padding-left: 0; 
    list-style-type: none;

}
.side-bar ul li {
  margin-bottom: 10px;
  font-size: 15px;

}

.side-bar ul li a {
  text-decoration: none;
  color: black; /* Sets the text color to black */

}

.side-bar ul li a:hover {
    color: #3a526a;
    text-decoration: underline  #18ba60 1px;
}

.side-bar ul li {
    margin-bottom: 25px;
}


</style>