import React from "react";
import image1 from "./assets/image 1.png";
import leftIcon from "./assets/🦆 icon _City_.png";
import rightIcon from "./assets/🦆 icon _City_ (1).png";
import frame11 from "./assets/Frame 11.png";
import frame12 from "./assets/Frame 12.png";
import frame13 from "./assets/Frame 13.png";
import frame14 from "./assets/Frame 14.png";

const App = () => {
  return (
    <>
      {/* Image Section */}
      <section className="w-full">
        <div
          className="w-1440 h-[400px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div>
            <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-plus-jakarta font-semibold p-2 bg-opacity-40 rounded-sm">
              Bangalore to Chennai Tempo Traveller for Hire
            </h1>
          </div>
        </div>
      </section>

      {/* Blog section  */}
      <div style={{ background: "#1C1C1C", color: "#FFC107", padding: "2rem" }}>
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <img
            src={leftIcon}
            alt="Left Icon"
            style={{ height: "3rem", width: "3rem" }}
          />
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "semibold",
              fontFamily: "Raleway, sans-serif",
              textAlign: "center",
              margin: "0",
            }}
            className="text-2.5rem lg:text-1.5rem"
          >
            Bangalore <span className="font-thin text-FFE189"> to </span>{" "}
            Chennai <br /> TT For Rent
          </h1>
          <img
            src={rightIcon}
            alt="Right Icon"
            style={{ height: "3rem", width: "3rem" }}
          />
        </div>
        <br />
        <div>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#C3C2C2",
              marginBottom: "1rem",
            }}
          >
            Here are few reasons to rent from Trippr from{" "}
            <span style={{ color: "#FFE189" }}> Bangalore </span>
            to <span style={{ color: "#FFE189" }}>Chennai </span>
          </p>
          <ul
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "3rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              Your <span style={{ color: "#FFE189" }}> Bangalore </span> to{" "}
              <span style={{ color: "#FFE189" }}> Chennai </span> taxi booking
              will be simple, and the cost will be disclosed in full.
            </li>
            <li>
              We don't charge any cancellation fees because we know that things
              come up.
            </li>
            <li>
              Be picked up on time every time with our dependable and
              cost-effective services.
            </li>
            <li>
              Travel with one of our polite chauffeurs who is trained
              exclusively for out-of-town trips.
            </li>
          </ul>
        </div>

        <br />
        <div style={{ marginTop: "1.5rem" }}>
          <h2
            style={{
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            Bangalore{" "}
            <span className="font-thin text-FFE189"> to Chennai </span> Choose
            from a wide range of vehicles
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            You can pick from our wide range of car rental options in{" "}
            <span style={{ color: "#FFE189" }}>Bangalore,</span> choose any of
            our air-conditioned cabs while traveling from Bangalore to{" "}
            <span style={{ color: "#FFE189" }}> Chennai.</span> We offer cabs
            that suit your budget, and you can pick an{" "}
            <span style={{ color: "#FFE189" }}> Indica </span> for short budget
            trips, a <span style={{ color: "#FFE189" }}> Sedan </span> for a
            slightly longer journey or a family holiday, an{" "}
            <span style={{ color: "#FFE189" }}> Innova </span> if you're
            planning to travel with a larger group, or even a{" "}
            <span style={{ color: "#FFE189" }}> Tempo Traveller </span> if
            you're heading out with your gang of friends. Our Bangalore to
            <span style={{ color: "#FFE189" }}> Chennai </span> taxi fare is
            economical, and our packages are super convenient. Below is a
            summary of our <span style={{ color: "#FFE189" }}> Bangalore </span>{" "}
            to <span style={{ color: "#FFE189" }}> Chennai </span> car rental
            offerings:
          </p>
          <br />
          <br />
          <h1
            style={{
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            Bangalore <span className="font-thin text-FFE189"> to </span>{" "}
            Chennai tour packages and customized transportation services
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            From Bangalore to Chennai, Tripper offers completely personalized
            one-way, one-day, and multi-day packages. For detailed information
            on our vehicle rental options, please visit our website, tourist
            packages from Bangalore to Chennai. To take advantage of attractive
            discounts and seasonal offers on your personalized packages, you may
            also contact our customer care team at the above-mentioned phone
            number.
          </p>
          <br />
          <h2
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            Why go by road from Bangalore to Chennai{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              <br />
              Tourist Destinations along the way
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            Information on the distance, time, and roadway
            <br />
            <br />
            Depending on the route taken, the approximate 350 KM trip from
            Bangalore to Chennai takes Seven and a half hours. You can travel
            the distance between Bangalore and Chennai using either of these
            route options:
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            Via the Mumbai Highway, which is around 346 Kilometers long and
            takes 6.5 hours to complete.
          </p>{" "}
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            {" "}
            Using the NH 75 and Vellore - Chennai Road, a journey of around 333
            kilometers and just over 7 hours.
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            For a faster, better, and a more comfortable journey, book a cab in
            Bangalore and take the first route.
          </p>
          <br />
          <h3
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            Locations on the Route:
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            The road from Bangalore to Chennai passes through some of{" "}
            <span style={{ color: "#FFE189" }}> Tamil Nadu's </span> most
            important and historic locations as it travels from one metropolis
            to another. Take advantage of the{" "}
            <span style={{ color: "#FFE189" }}> Bangalore </span> to Chennai
            Taxi Service and enjoy the journey through historic cities and
            beautiful natural settings. Towns like Hosur, Krishnagiri, Ambur,
            Vellore, and Kanchipuram will be among those you pass through en
            route. Any of these locations are accessible with your car rental
            from Bangalore to Chennai for a brief sightseeing tour.
          </p>
          <br />
          <h2
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            One Way{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              Taxi Fare{" "}
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            Tripper has gained immense popularity in the car rental industry by
            providing best value for money to the customers. The same approach
            is applicable to our one way car hire services. We have taken
            adequate care to ensure that you get affordable and best offers for
            one way taxi fare while booking.
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            It can become a big hassle to search and do one way taxi booking
            through local operators but through Trippcom, you can book a package
            that allows you to explore and choose your preferred options in a
            cost-effective manner. If you are looking for the best one way car
            rental and want to make a hassle free one way taxi booking, look no
            further than Trippcom. You can also book one way taxi by calling at
            6366 364 901/02/03/04/05.
          </p>
          <br />
          <h1
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            Landmarks{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              in Chennai
            </span>
          </h1>
          <h2
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            About Chennai -
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            Chennai, the capital of Tamil Nadu and one of the biggest
            metropolises in the nation, has a blend of historic monuments with
            sophisticated metropolitan amenities. You may explore Chennai's
            historical monuments, traditional and modern cultures, and beautiful
            surroundings with a Bangalore to Chennai taxi. See these well-known
            locations by using a{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              one-way taxi service from Bangalore to Chennai
            </span>
          </p>
          <br />
          <ul
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "3.5rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              Marina Beach – the most popular and busiest beach of the city with
              recreational options.
            </li>
            <li>
              Kapaleeshwarar Temple – a 7th-century Shiva temple, known for its
              ornate Dravidian architecture.
            </li>
            <li>
              Government Museum – a state-run museum preserving historical
              artifacts and archaeological findings dating back to the Bronze
              Age.
            </li>
            <li>
              Edward Elliot's Beach – the quieter urban beach of the city and a
              popular local and tourist haunt.
            </li>
            <li>
              Santhome Cathedral – the most famous cathedral of the city, known
              for its 19th-century Gothic architecture.
            </li>
            <li>
              Dakshina Chitra – a heritage museum with cultural exhibits and
              arts center.
            </li>
            <li>
              Valluvar Kottam – a heritage site and cultural venue dedicated to
              the historical poet Valluvar.
            </li>
            <li>
              Semmozhi Poonga – an expansive botanical garden with more than 500
              varieties of exotic plants and flowers.
            </li>
          </ul>
          <br />
          <h2
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            What makes Trippr the most dependable taxi service{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              Between Bangalore and Chennai?{" "}
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            Since its start, Trippr has consistently exhibited its key ideals of
            transparency, use dependability, and hospitality. We are committed
            to provide excellent service on all Bangalore-bound cabs since we
            have made a name for ourselves as India's largest intercity cab
            service, and we are still committed to giving the best road trip
            experiences all throughout India.
          </p>
          <br />
          <h2
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            One-Way taxi from{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              Bangalore to Chennai
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            If you are only interested in a one-way drop, you may also use our
            Bangalore to Chennai drop services, which offer one-way cabs for
            about half the price of a round-trip taxi from Bangalore to Chennai.
          </p>
          <br />
          <h1
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            Trippr Taxi Reverse Drops from{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              Chennai to Bangalore{" "}
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            Renting a TripprTaxi for Reverse Drops from Chennai to Bangalore
            Trippr is currently present on more than 5 lakh routes all over the
            country. This implies that you can reserve a cab from Chennai to
            Bangalore for a similar amount. We guarantee that the level of
            service on these reverse routes will be just as high-caliber. You
            may make a reservation for your reverse itinerary using the booking
            widget on the top.
          </p>
          <br />
          <h2
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            How to Book{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              One-Way Car Rental Taxi Online{" "}
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "disc",
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            Looking to book a one-way trip? Trippr's got you covered! Offering
            convenient and easy one-way rentals across 5 lakh routes, Trippr's
            pan-India coverage includes over 2000 Tier I, II and III cities as
            well as smaller towns across the length and breadth of the country.
            With Trippr, you can choose from our fleet of exceptionally
            well-maintained vehicles such as Sedans, Innovas, SUVs, Tempo
            Travellers and travel in sheer comfort and safety. Our one-way fares
            are the lowest in the industry and are in fact inclusive of both
            state and toll taxes. Be rest assured that we are following every
            single precaution to clean, sanitize and disinfect our cabs. We, at
            Trippr, acknowledge that your safety is paramount, more so in the
            context of the ongoing pandemic.
          </p>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.5rem",
              gap: "50px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src={frame11}
                alt="Website"
                style={{
                  marginBottom: "0.5rem",
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={frame12}
                alt="Call Centre"
                style={{
                  marginBottom: "0.5rem",
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={frame13}
                alt="e-Mail"
                style={{
                  marginBottom: "0.5rem",
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={frame14}
                alt="Mobile App"
                style={{
                  marginBottom: "0.5rem",
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div style={{ marginTop: "1.5rem" }}>
            <ol
              style={{
                fontSize: "1.2rem",
                color: "#C3C2C2",
                listStyleType: "decimal",
                paddingLeft: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <li>
                Visit our website{" "}
                <span
                  style={{
                    color: "#FFE189",
                    marginBottom: "1rem",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: "semibold",
                  }}
                >
                  {" "}
                  (www.Trippr.com){" "}
                </span>{" "}
                or call us on{" "}
                <span
                  style={{
                    color: "#FFE189",
                    marginBottom: "1rem",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: "semibold",
                  }}
                >
                  {" "}
                  +91 6366 364 901/02/03/04/05{" "}
                </span>{" "}
                to make a booking with us.
              </li>
              <li>
                Add in the pickup and drop destinations and proceed to click on{" "}
                <span
                  style={{
                    color: "#FFE189",
                    marginBottom: "1rem",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: "semibold",
                  }}
                >
                  {" "}
                  "One-Way"{" "}
                </span>{" "}
                before you press{" "}
                <span
                  style={{
                    color: "#FFE189",
                    marginBottom: "1rem",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: "semibold",
                  }}
                >
                  {" "}
                  Enter.{" "}
                </span>
              </li>
              <li>
                You can also install our{" "}
                <span
                  style={{
                    color: "#FFE189",
                    marginBottom: "1rem",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: "semibold",
                  }}
                >
                  {" "}
                  Trippr App{" "}
                </span>{" "}
                on{" "}
                <span
                  style={{
                    color: "#FFE189",
                    marginBottom: "1rem",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: "semibold",
                  }}
                >
                  {" "}
                  PlayStore{" "}
                </span>{" "}
                and enjoy a seamless booking experience.
              </li>
              <li>
                One of our Customer Service Executives will get in touch with
                you shortly.
              </li>
            </ol>
          </div>
          <br />
          <h1
            style={{
              color: "#FFE189",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            Why choose Trippr{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              for One-Way Car Rental service?
            </span>
          </h1>
          <h2
            style={{
              color: "white",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            One-Way Rentals{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              are Ideal when -
            </span>
          </h2>
          <ul
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              You want to avoid air travel, and last-minute airline delays or
              cancellations
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              You are moving to a new city
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              You want to avoid traveling with strangers
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              You are traveling with kids and grandparents and hence
              door-to-door pickup is a priority.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              You are taking an unplanned trip and you are not sure when you'd
              return
            </li>
          </ul>
          <br />
          <h2
            style={{
              color: "white",
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "semibold",
            }}
          >
            Why{" "}
            <span
              style={{
                color: "#FFC107",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              Choose Trippr{" "}
              <span
                style={{
                  color: "white",
                  marginBottom: "1rem",
                  fontSize: "2.5rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "semibold",
                }}
              >
                ?{" "}
              </span>{" "}
            </span>
          </h2>
          <ol
            style={{
              fontSize: "1.2rem",
              color: "#C3C2C2",
              listStyleType: "decimal",
              paddingLeft: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            <li style={{ marginBottom: "0.5rem" }}>
              <strong
                style={{
                  color: "#FFE189",
                  marginBottom: "1rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "semibold",
                }}
              >
                Accessibility:
              </strong>{" "}
              Be it any Tier I, II or III city, Trippr will bring you home safe.
              You can book a cab anywhere, any time, and be rest assured that a
              Trippr will be on its way.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong
                style={{
                  color: "#FFE189",
                  marginBottom: "1rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "semibold",
                }}
              >
                Safety:
              </strong>{" "}
              One-way cabs provide a dedicated space along with door to door
              connectivity to its commuters. This takes care of any safety
              concerns that may arise due to unwanted contact or exposure to
              high-risk public places such as airports or train stations.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong
                style={{
                  color: "#FFE189",
                  marginBottom: "1rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "semibold",
                }}
              >
                Affordability:
              </strong>{" "}
              Our prices are inclusive of all toll and state taxes. Hence, you
              need not pay for any additional charges during the trip. Leave
              your wallet home! Trippr’s one-way fares are the lowest in the
              industry.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong
                style={{
                  color: "#FFE189",
                  marginBottom: "1rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "semibold",
                }}
              >
                Trippr's promise:
              </strong>{" "}
              of safety, reliability and convenience during the rides have been
              reinforced by strict adherence to the government issued safety
              guidelines. Besides, we have also launched COVID insurance for our
              driver-partners as well as customers.
            </li>
          </ol>
          <br />
          <br />
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "semibold",
              fontFamily: "Raleway, sans-serif",
              textAlign: "center",
              margin: "0",
            }}
          >
            FAQs{" "}
            <span
              style={{
                color: "#FFE189",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "semibold",
              }}
            >
              {" "}
              on One-Way Car Rental
            </span>
          </h2>
          <br />
          <br />
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <h2
                style={{
                  color: "#FFE189",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "semibold",
                }}
              >
                Who has the cheapest one way car rentals?
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#C3C2C2",
                  listStyleType: "disc",
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                Our prices are inclusive of all toll and state taxes. Hence, you
                need not pay for any additional charges during the trip.
                Trippr’s one-way fares are the lowest in the industry.
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: "#FFE189",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "semibold",
                }}
              >
                Is one way car rental more expensive?
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#C3C2C2",
                  listStyleType: "disc",
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                One-way car rentals are cheaper than round-trips. You pay only
                one-side fare for your one-way drop journey. Trippr's one-way
                fares are all-inclusive, implying that the state taxes, toll
                taxes and GST are already included in the fare.
              </p>

              <h3
                style={{
                  color: "#FFE189",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "semibold",
                }}
              >
                How much is one way car rental fee?
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#C3C2C2",
                  listStyleType: "disc",
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                Our one-way rentals start as low as INR 929
              </p>

              <h3
                style={{
                  color: "#FFE189",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "semibold",
                }}
              >
                How to find the best one way car rental deals?{" "}
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#C3C2C2",
                  listStyleType: "disc",
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                Our one way car rentals are cheaper. The fares may seem higher
                for a few states, but they include all state and toll taxes,
                which means you do not pay anything over and above the price
                displayed against your destination. Round trips on the other
                hand, do not include state and toll taxes. Hence, make use of
                Trippr's one-way launch discounts to avail the lowest fares for
                your upcoming journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
