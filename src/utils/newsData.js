import Image1 from "../images/Image-1.png";
import Image2 from "../images/Image-2.png";
import Image3 from "../images/Image-3.png";
import Image4 from "../images/Image-4.png";
import Background1 from "../images/Background-1.svg";
import Background2 from "../images/Background-2.svg";
import Background3 from "../images/Background-3.svg";
import Background4 from "../images/Background-4.svg";

const newsData = [
    {
        country: "United States of America",
        heading: "New omicron boosters are now available at U.S.",
        description:
            "The U.S. authorized the first major makeover of the Covid-19 vaccines this week in an effort to stem an expected tide of infections and hospitalizations this fall.",
        author: "William Raff",
        date: "Sep, 06, 2022",
        timeInMins: "4",
        arrayOfParagraphs1: [
            "The U.S. authorized the first major makeover of the Covid-19 vaccines this week in an effort to stem an expected tide of infections and hospitalizations this fall.",
            "But it’s unclear how much protection the new booster shots will provide. The Food and Drug Administration and the Centers for Disease Control and Prevention cleared the shots without any data from clinical trials that are testing the reformulated doses in humans.",
            "The new boosters, authorized for people ages 12 and older, target the highly contagious and immune-evasive omicron BA.5 subvariant that has caused a wave of breakthrough infections over the summer. The shots also target the original strain of the virus that first emerged in Wuhan, China, in 2019.",
            "The nation’s top health officials acted with urgency this summer to ensure the new boosters would roll out in time for the fall. They are worried that the waning effectiveness of the old vaccines is creating an opening for omicron to cause another wave of hospitalizations this winter as people spend more time indoors where the airborne virus spreads more easily.",
        ],
        arrayOfParagraphs2: [
            "Deaths and hospitalizations have climbed since April among the elderly, the most vaccinated age group in America, as omicron has continued to mutate into more and more transmissible subvariants that dodge the protection of the original vaccines, according to Heather Scobie, a CDC epidemiologist.",
            "Dr. Peter Marks, who heads the FDA office that reviews vaccines, said the new boosters aim to restore the high levels of protection that vaccines demonstrated in early 2021. But Marks acknowledged that the federal government’s experts simply do not know yet whether the boosters will meet the high bar set by those doses.",
            "The FDA will conduct surveillance to see whether the boosters meet that goal, Marks said. When Pfizer’s and Moderna’s shots were authorized in December 2020, they provided more than 90% protection at preventing Covid.",
        ],
        image: Image1,
        imageAlt: "An illustration about covid-19",
        background: Background1,
        id: "new-omicron-booster",
    },
    {
        country: "China",
        heading: "China approves first inhaled Covid vaccine",
        description:
            "China has become the first country to green-light an inhaled Covid-19 vaccine, paving the way for potential use of the needle-free product in the country.",
        author: "Rose Hutchinson",
        date: "Sep, 06, 2022",
        timeInMins: "8",
        arrayOfParagraphs1: [
            "China has become the first country to green-light an inhaled Covid-19 vaccine, paving the way for potential use of the needle-free product in the country, where suppressing the spread of Covid-19 remains a top priority.",
            "The product, known as Convidecia Air, delivers a vaccine dose through a puff of air from a nebulizer that is then inhaled by mouth. CanSino's injected Convidecia Covid-19 vaccine is already in use in China and has been approved in a handful of other countries.",
            "According to a database maintained by the World Health Organization (WHO), CanSino's new product is one of two specifically inhaled vaccines that had reached clinical phase development, as a number of companies worldwide research innovative ways to deliver Covid-19 protection via the nose and mouth.",
        ],
        arrayOfParagraphs2: [
            "The clearance of the inhaled shot, which the company said needed to fulfill additional steps before going to market, comes as multiple Chinese cities enforce large-scale Covid lockdowns and mass testing drives in response to small-scale outbreaks.",
            "China continues to adhere to a stringent zero-Covid policy, even as the rest of the world learns to live with the virus. Pressure on officials to get outbreaks under control is mounting in the lead-up to a twice-a-decade political meeting next month, where Chinese leader Xi Jinping is expected to break with tradition and step into a third term.",
            "It remains unclear what place the new inhaled vaccine will fill in this landscape. CanSino cautioned in a company filing that some steps, including conducting clinical trials, and administrative approval remain before the vaccine can go to market. It also said its product would face fierce competition domestically, where nine vaccines have so far received authorization.",
        ],
        image: Image2,
        imageAlt: "General recomendations for surviving in the outbreak",
        background: Background2,
        id: "fisrt-inhaled-vaccine",
    },
    {
        country: "United Kingdom",
        heading:
            "First bivalent booster vaccine approved by UK medicines regulator",
        description:
            "The adapted COVID-19 vaccine made by Moderna targets two different coronavirus variants: the original virus from 2020 and the Omicron variant.",
        author: "Larry Parker",
        date: "Sep, 04, 2022",
        timeInMins: "12",
        arrayOfParagraphs1: [
            "An updated version of the COVID-19 vaccine made by Moderna that targets two coronavirus variants (known as a “bivalent” vaccine) has today been approved for adult booster doses by the Medicines and Healthcare products Regulatory Agency (MHRA) after it was found to meet the UK regulator’s standards of safety, quality and effectiveness.",
            "The decision to grant approval for this booster vaccine in the UK was endorsed by the government’s independent expert scientific advisory body, the Commission on Human Medicines, after carefully reviewing the evidence.",
            "In each dose of the booster vaccine, ‘Spikevax bivalent Original/Omicron’, half of the vaccine (25 micrograms) targets the original virus strain from 2020 and the other half (25 micrograms) targets Omicron.",
        ],
        arrayOfParagraphs2: [
            "The MHRA’s decision is based on data from a clinical trial which showed that a  booster with the  bivalent  Moderna vaccine triggers a strong immune response against both Omicron (BA.1) and the original 2020 strain. In an exploratory analysis the bivalent vaccine was also found to generate a good immune response against the Omicron sub-variants BA.4 and BA.5.",
            "Safety monitoring showed that the  side effects observed were the same as those seen for the original Moderna booster dose and were typically mild and self-resolving, and no serious safety concerns were identified.",
            "I am pleased to announce the approval of the Moderna bivalent booster vaccine, which was found in the clinical trial to provide a strong immune response against the Omicron BA.1 variant as well as the original 2020 strain. Said Dr June Raine, MHRA Chief Executive.",
            "The first generation of COVID-19 vaccines being used in the UK continue to provide important protection against the disease and save lives. What this bivalent vaccine gives us is a sharpened tool in our armoury to help protect us against this disease as the virus continues to evolve. Said in the rest of his statement.",
        ],
        image: Image3,
        imageAlt: "A young doctor getting ready for her shift",
        background: Background3,
        id: "first-bivalent-booster",
    },
    {
        country: "Israel",
        heading: "Myocarditis after COVID-19 vaccines remain rare",
        description:
            "A new study from Israel found that the risk of developing myocarditis among males ages 16 to 19 years was about 1 in 15,000 after third dose of the Pfizer COVID-19 vaccine.",
        author: "John Davis",
        date: "Aug, 31, 2022",
        timeInMins: "22",
        arrayOfParagraphs1: [
            "Several previous studies and reports from public health agencies around the world including the U.S. Centers for Disease Control and Prevention have highlighted a possible connection and potentially increased risk of myocarditis after receiving an mRNA COVID-19 vaccine, generating considerable scientific, policy and public interest .",
            "Typically thought to be triggered by a viral infection, myocarditis is the inflammation of the middle layer of the wall of the heart muscle, the myocardium. This condition is uncommon and may temporarily or permanently weaken the heart muscle and the heart’s electrical system, which keeps the heart beating normally. An episode of myocarditis may resolve on its own or with treatment, or may result in lasting damage to the heart. In the general population not during a global pandemic, it is estimated that approximately 10 to 20 people per 100,000 are diagnosed with myocarditis each year, according to the American Heart Association’s 2021 scientific statement on myocarditis.",
            "Research detailing post-vaccination myocarditis in Israel after the first and second dose of the Pfizer-BioNTech COVID-19 vaccine were recently published by the country’s Ministry of Health. The incidence rate of myocarditis was low, however, it was primarily in young males after a second COVID-19 vaccination, suggesting a potential relationship between the vaccine and myocarditis. The results raised concerns about the potential for increased myocarditis after a booster dose, therefore, this new analysis was focused on the risk of myocarditis after a booster dose.",
        ],
        arrayOfParagraphs2: [
            "It is important to understand the connections between this rare heart condition and COVID-19 vaccines, so we can monitor the prevalence of myocarditis and pay extra attention to those who are most at risk, said lead study author Dror Mevorach, M.D., a professor of medicine and head of Immunology-Rheumatology Institution at Hadassah Ein Karem Medical Center and chairman of the Israeli Ministry of Health Committee for Identifying Myocarditis as an Adverse Effect of mRNA Vaccines in Jerusalem, Israel.",
            "From July 31, 2021, to November 5, 2021, nearly 4 million (3.94 million) adults in Israel received a booster dose of the Pfizer-BioNTech vaccine, about half (48.7%) of whom were males. Health data for all reported cases of myocarditis after receiving the Pfizer-BioNTech COVID-19 vaccine were evaluated. A cardiologist and a rheumatologist reviewed and classified the data based on the Brighton Collaboration Myocarditis Case Definition.",
            "Researchers believe further study is required to better explain what may predispose young males to develop myocarditis after a COVID-19 vaccine and the pathophysiological mechanisms involved.",
        ],
        image: Image4,
        imageAlt: "A young man worried about his myocarditis condition",
        background: Background4,
        id: "covid-and-myocarditis",
    },
];

export default newsData;
