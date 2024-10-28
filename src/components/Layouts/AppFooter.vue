<template>
<div>

    <!--footer-->
    <footer>
        <div class="container pt-5">
            <hr class="bg-light">

            <div class="row text-left text-md-left gap-1">
                <div class="col-md-4 col-sm-12">
                    <img class=" mt-5" src="../../assets/images/white-logo.svg" alt="" style="height: 45px;">
                    <p class="footer-para py-4">Your trusted partner in tax, auditing, accounting services and other more related services."</p>

                    <div class=" social-media d-flex gap-4 ">
                        <li><a href="https://www.facebook.com/JaasrithaCorporateSolutions/"><i class="bi bi-facebook fs-5"></i></a></li>
                        <li><a href="#"><i class="bi bi-linkedin fs-5"></i></a></li>
                        <li><a href="#"><i class="bi bi-instagram fs-5"></i></a></li>
                        <li><a href="#"><i class="bi bi-twitter fs-5"></i></a></li>
                    </div>
                </div>
                <div class=" list1 col-md-2 col-sm-12  text-white mt-3">
                    <div class="py-4">
                        <li class="">
                            <!-- Replace RouterLink with anchor tag and bind href -->
                            <a class="routlink" :href="getUrl('/')">Home</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/about')">About</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/service')">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="routlink" :href="getUrl('/sub')">SubServices</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/contact')">Contact</a>
                        </li>

                    </div>
                </div>

                <div class=" list2 col-md-2 col-sm-12 text-white mt-3">
                    <div class="py-4">
                        
                        <li class="">
                            <a class="routlink" :href="getUrl('/service')">Auditing</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/service')">Investigations</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/service')">EDP & IT related</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/service')">Valuations</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/service')">Accounting Services</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/service')">Tax Assessment & Planning</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/service')">Registrations</a>
                        </li>
                        <li class="">
                            <a class="routlink" :href="getUrl('/service')">Training & Education</a>
                        </li>
                    </div>
                </div>
                <div class=" list2 col-md-2 col-sm-12 text-white mt-3">
                    <div class="row">
                        <div class="gap-2 d-flex">
                            <i class="bi bi-envelope-fill pt-3"></i>
                            <p class="pt-3">Jaastrithasolution@gmail.com</p>
                        </div>
                        <div class="gap-2 d-flex">
                            <i class="bi bi-telephone-fill pt-3"></i>
                            <p class="pt-3">+919705200099</p>
                        </div>
                        <div class=" gap-2 d-flex">
                            <i class="bi bi-geo-alt-fill pt-3"></i>
                            <p class="pt-3">Venkateswara Nagar, J.N.Road, Rajamahendravaram</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="bg-light mt-5 ">
            <div class="row  pb-2">
                <div class="col text-center">
                    <p>&copy; 2017 Jasatritha Solutions.</p>
                </div>
            </div>
        </div>
    </footer>

</div>
</template>

<script>
export default {
    data() {
        return {
            name: "AppFooter"
        }
    },
    methods: {
    // Function to generate the URL for Vue Router paths
    getUrl(route) {
      return this.$router.resolve(route).href;
    },
  },
}
</script>

<style scoped>
/*************** footer *****************/

footer {
    background-color: #2e363a;
    color: white !important;
}

.routlink,
.bi {
    color: white;
    text-decoration: none;

}

footer .routlink:hover {
    text-decoration: underline;

}

footer .social-media {
    list-style: none;
}

footer p {
    margin: 0;
}

footer .list1,
.list2 {
    list-style-type: square;

}

@media (max-width:768px) {
    footer .row {
        text-align: left;
    }

    footer .list1,
    footer .list2 {
        padding-left: 10px;
        text-align: left;
    }
}
</style>
