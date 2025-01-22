import React from "react";
import { createRoot } from "react-dom/client";
import SessionDetails from "../../components/session-details";
import { SESSIONS } from "../../utils";

const SessionsPage = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <SessionDetails
      sessionInfo={SESSIONS["02-08-phoenicians-trading-with-india"]}
      synopsis={
        <p>
          Ajay Sharma is Advisor to more than 150 Multi National and Indian companies on issues
          ranging from entry strategies, crisis communication, financial and investor communication,
          sustainability programs, CSR and consumer communication. With an illustrious career
          spanning two decades, Mr Ajay Sharma has been inducted into the prestigious Hall of Fame
          by the Public Relations Council of India in 2014. An alumnus of the Birla Institute of
          Technology, Ranchi, he also holds Diplomas in Business Journalism, Cyber Laws and Studies
          in Behavioural Investing. He began his career as a business journalist with The Economic
          Times. His last professional assignment was as Managing Partner for Ketchum Sampark India
          with its headquarters in New York City. He has conducted more than 250 workshops on
          Spokesperson Training and Business Storytelling.
          <br />
          In his talk,' Phoenicians trading with India.. first ever scientific proof', Mr Sharma
          will present his perspective(based on latest findings) to the commonly held viewpoint/
          narrative that India was not trading actively with the world before the arrival of the
          Greeks in the late 4th Century BC and the Romans in the 2nd Century BC. He will trace the
          origins of silver mining in Spain in the 6th century BC and earlier, elaborate on ancient
          silver coins discovered in Greece, Persia, and India indicating diverse origins from
          British Isles, Spain, Greece, Turkey and Iran and how they were transported to far off
          lands.... Was it the land or sea route? Did the Romans discover monsoon winds and connect
          India to Europe via the sea route? How did the silver reach present day Afganisthan? Why
          did the Greeks and Persians not land up with silver from Spain though they successively
          ruled over the world's largest empires for 400 years? As per historians, PHOENICIANS
          trading with India is mentioned in the Old Testament. Does it have scientific/historical
          proof?
          <br />
          THESE ARE SOME OF THE INTRIGUING QUESTIONS THAT WILL FIND ANSWERS THROUGH ARCHAEOLOGICAL
          STUDIES FROM ACROSS THE WORLD, SCIENTIFIC STUDIES AND ECONOMIC DATA SHARED THROUGH THE
          ANALYSIS AND INSIGHTS OF OUR SPEAKER, MR AJAY SHARMA.
        </p>
      }
      prev={SESSIONS["02-07-nuclear-weapons"]}
      next={SESSIONS["02-09-order-of-gandabherunda"]}>
      <div className="paragraph">
        The Phoenicians, an ancient civilization celebrated for their seafaring skills, were
        instrumental in shaping early Mediterranean trade. While their own written records are
        scarce, their impact on commerce, culture, and navigation is clearly reflected in the
        archaeological and historical evidence of the ancient world. The Phoenicians are believed to
        have had early trade connections with India. While direct evidence is scarce, linguistic
        parallels in ancient texts, such as the Rigveda and the Hebrew Bible, suggest potential
        trade links and cultural exchanges between the Phoenician and Indian civilizations.
      </div>
      <div className="paragraph">
        The Rig Veda has references indicating that the Phoenicians had their earliest home in
        India. The word Pani is repeatedly used, which is interpreted as Vaninj, a merchant. Vanij
        was found to be derived from the root ‘Pani’ . So the word Pani, meaning a merchant and
        occurring in the Rig Veda might indeed be referring to the Phoenician race. The proof of
        antiquity lies in some words of Tamil and Sanskrit origin used in the Hebrew Bible like Tuki
        (original Tokai which means peacock), ahalim (akil), kurkum (kukai), armon (aranmanai) and
        many more.
      </div>
      <div className="paragraph">
        During the 10th Century BC, King Solomon of Israel and Hiram 1,the ruler of Tyre jointly
        financed land and sea trade to procure precious metals, wood, ivory, stones etc.
      </div>
      <div className="paragraph">
        Tarshish, a seaport or maritime region that has an uncertain location is mentioned in the
        Bible.
        <br />
        Could be Spain, Phoenician colonies or the Indian Ocean. The term 'Ships of Tarshish' is a
        term used to describe large sea-going merchant vessels that could travel long distances,
        probably upto 2,500 miles. These ships were large enough to travel across oceans. It was the
        source of King Solomon's immense wealth through trading in precious metals, wood, ivory,
        stones etc which he obtained in partnership with King Hiram of Tyre. Joint expeditions to
        Ophir (traced by studies to Abhira), near the Indus River, in present day Gujarat, brought
        back large amounts of gold and precious stones to add to their wealth.
      </div>
      <h3>Proof of antiquity of Indian Trade:</h3>
      <div className="paragraph">
        The proof of antiquity of Indian trade challenges the belief that Persians or Greeks were
        the first to connect with India. Evidence from the Rigveda indicates that Indian products
        such as pepper, cinnamon, and cotton, as well as depictions of Indian animals like
        rhinoceroses, elephants, and monkeys, were known in ancient Egypt, Israel, and Assyria long
        before the Romans or Greeks established sea trade with India. This suggests that India had
        established trade networks far earlier, contradicting the idea that it was the Romans who
        discovered monsoon winds and facilitated sea- based trade routes.
      </div>
      <h3>The Persian Silver Hoard</h3>
      <div className="paragraph">
        The Persian Silver Hoard, amassed during Darius I's reign (522-486 BCE), consisted of an
        estimated 5,000 metric tons of silver, reflecting the vast wealth of the Achaemenid Empire,
        which spanned 5.5 million square kilometers. In 331 BCE, the Greeks, under Alexander the
        Great, looted this hoard during his conquest of Persia.
      </div>
      <div className="paragraph">
        The Phoenician-Persian connection was an important part of the ancient world, with the
        Phoenicians acting as middlemen for many empires. The Persians were particularly reliant on
        their expertise in seafaring and navigation to expand their empire. The Persians also relied
        heavily on the Phoenicians' ability to build ships that could carry large amounts of cargo
        over long distances. The ships were strong enough to hold the weight of 5-8 horses/
        elephants !!
      </div>
      <div className="paragraph">
        JANAPADAS: Ancient Indian States Janapadas (ancient Indian states) paid tribute in gold to
        the Persians. Gold was widely panned from river sands and gravels across India, making it
        relatively inexpensive. The gold-silver ratio (GSR) in India was 1:8, compared to 1:18 in
        Persia, highlighting India's abundance of gold. This disparity made Indian gold highly
        valued by the Persians, contributing to their wealth and the tribute system.
        <br />
        Lead isotope studies to determine the original source of silver suggest that while all
        silver was exploited from primary ore sources, the Phoenicians dug deeper into the deposits,
        reaching ore minerals that did not undergo any weathering-associated fractionation. The
        findings point to the Phoenicians as the exploiters of these sources, particularly in Spain,
        where silver ore mines were exclusively controlled by them between 950 BC and 600 BC (or 850
        BC to 650 BC).
      </div>
      <h3>Timeline of the key developments in ancient trade and resource exploration:</h3>
      <div className="paragraph">
        <ul>
          <li>1200 BC - 960 BC: Anatolia (Turkey), Aegean (Greece)</li>
          <li>960 BC - 931 BC: Sardinia (Italy), British Isles (Tin)</li>
          <li>931 BC - 883 BC: Prospecting continues</li>
          <li>883 BC - 650 BC: Aggressive Shift to Iberia (Spain) – silver and tin.</li>
          <li>612 BC: Fall of Neo-Assyrian Empire and Phoenicians</li>
          <li>1212 BC: Pepper found inside nostrils of Ramses II’s mummy</li>
          <li>1000 BC: Cinnamon found in flasks in Israel</li>
          <li>859 BC - 839 BC: Bas-relief from the palace of Ashurnasirpal II in Nimrud</li>
          <li>
            825 BC: King Shalmaneser III erects black obelisk in Nimrud Phoenicians bringing tribute
            , records Indian animals in tribute from Musri (Ancient Egypt) to king of Assyria
          </li>
          <li>
            727 BC: Cotton fabric used inside burial vaults of the Assyrian palace of Nimrud The
            trade timeline indicates that the Phoenicians were pivotal in establishing and managing
            many of the ancient world’s trade networks, particularly those involving valuable
            resources like silver, spices, and textiles.
          </li>
        </ul>
      </div>
      <h3>Antiquity of Indian Trade:</h3>
      <ul>
        <li>Around 26 BC, Roman sailors were already trading with India.</li>
        <li>By 300 BC, Megasthenes was recording his observations of the Maurya Empire.</li>
        <li>From 600-450 BC, Panini contributed to the linguistic legacy of ancient India.</li>
        <li>
          By 1200 BC, the Phoenicians may have been involved in trade with the Indian subcontinent.
        </li>
        <li>
          Between 4000-1600 BC, the Indus Valley Civilization was at its peak, setting the stage for
          India’s early urban and cultural history.
        </li>
      </ul>
      <div className="paragraph">
        During these periods, India and its neighboring regions were involved in growing trade and
        cultural exchanges, both within the subcontinent and with other ancient civilizations, such
        as those of the Near East, Central Asia, Greece, and Rome. These interactions contributed to
        the shaping of early Indian culture, political systems, and commerce.
        <br />
        <br />
        These events and figures highlight the rich and diverse history of early India and its
        connections with the wider ancient world. India’s ancient trade and transportation network
        was highly sophisticated, utilizing a range of specialized routes, services, and modes of
        transport to ensure the smooth movement of goods across varied terrains. This enabled India
        to be a central hub in ancient global trade.
        <ul>
          <li>Integrated Network of Land and Water routes</li>
          <li>Logistics services, Blind mariners, inland ports, etc.</li>
          <li>Network of specialist trade routes for movement of merchandise</li>
        </ul>
        Forests (kantarapatha), jungle-thickets (jangalapatha), water (varipatha), narrow pathways
        using goats (ajapatha), rams (mendapatha), climbers with spikes (sankupatha)
      </div>
      <div className="session-highlight-text">
        “The overall economic organization of the Indus cities ……. reveal a highly stratified
        economic interaction system… larger towns and cities were directly connected with external
        regions and to each other by inter-regional networks. Cities were connected to towns and
        villages through regional networks of exchange, and more local networks …….. ” Jonathan Mark
        Kenoyer, Archaeologist
      </div>
      <div className="paragraph">
        Jonathan Mark Kenoyer, a renowned archaeologist specializing in the Indus Valley
        Civilization, emphasizes the complexity and stratification of economic and trade networks in
        his analysis of the civilization. His quote highlights the multi-layered nature of the Indus
        economy, with an intricate system of internal and external trade that tied different regions
        together, facilitating the movement of goods, people, and ideas.
      </div>
      <div className="session-highlight-text">
        Ajay Sharma is Advisor to more than 150 Multi National and Indian companies on issues
        ranging from entry strategies, crisis communication, financial and investor communication,
        sustainability programs, CSR and consumer communication. With an illustrious career spanning
        two decades, Mr Ajay Sharma has been inducted into the prestigious Hall of Fame by the
        Public Relations Council of India in 2014.
      </div>
    </SessionDetails>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SessionsPage />);
