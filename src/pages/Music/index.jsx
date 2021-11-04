import React, { useState } from 'react';
import { TopArtists , ArtistCard , AlbumDetails , LyricsCard } from '../../components/';
import './style.css';

export const Music = () => {

  const [ artistId, setArtistId ] = useState({artist:'Kanye West', title:'Hurricane'});

  const [ artists, ] = useState([
    { id: 2503, Name: 'Pink Floyd', Album: 'The Dark Side Of The Moon'},
    { id: 1322, Name: 'Ed Sheeran', Album: '='},
    { id: 5541, Name: 'Drake', Album: 'Certified Lover Boy'}
  ])

  console.log(artistId);

  const [ album, ] = useState([
    {id:0,artist:"Kanye West",title: "Hurricane", runtime: 4.03},
    {id:1,artist:"Koryn Hawthorne",title: "Speak To Me", runtime: 1.04}
    // {id:1,title: "Speak To Me", runtime: 1.04},
    // {id:2,title: "Breathe", runtime: 2.49},
    // {id:3,title: "On The Run", runtime:3.36},
    // {id:4,title: "Time", runtime:7.02},
    // {id:5,title: "The Great Gig In The Sky", runtime:4.44},
    // {id:6,title: "Money", runtime:6.33},
    // {id:7,title: "Us And Them", runtime:7.52},
    // {id:8,title: "Any Colour You Like", runtime:3.25},
    // {id:9,title: "Brain Damage", runtime:3.45},
    // {id:10,title: "Eclipse", runtime:1.54}
])

const [artist,] = useState(
    {
        Name: 'Kanye West',
        Profile: `One of the most influential and critically lauded artists of the early 21st century, Kanye West went from hip-hop beatmaker to worldwide hitmaker as his production work for artists such as led to a major-label recording contract and, ultimately, a wildly successful solo career that counted an unbroken string of chart-topping, multi-platinum albums and nearly two dozen Grammy Awards for classic sets like 2005's Late Registration, 2007's Graduation, and 2010's My Beautiful Dark Twisted Fantasy. Early on, West paired his beats with tongue-twisting raps and outspoken confidence. With a backpack and brightly colored polo shirt, his dapper fashion sense set him apart from many of his rap peers, while his attitude often came across as boastful and egotistical. This flamboyance made for good press, something that West enjoyed, for better or worse, throughout the course of his career. With his outsized personality, he courted plenty of controversy, posing for the cover of Rolling Stone as Jesus Christ, claiming that "George Bush doesn't care about black people" during a televised Hurricane Katrina fundraiser, and infamously interrupting an awards speech by in 2009. And yet, his steady presence in the celebrity limelight couldn't eclipse his musical talent. His production abilities seemed boundless, as he not only racked up impressive hits for himself (including number one singles "Gold Digger" and "Stronger") but also collaborated on smash hits with longtime collaborator (on their 2011 Watch the Throne track "Ni**as in Paris") and even (along with

            on 2015's "FourFiveSeconds"). As his career progressed throughout the early 21st century, West became a superstar on his own terms without adapting his appearance, his rhetoric, or his music to fit any one musical mold.
            
            A proud and vocal Chicagoan, West was actually born in Atlanta, moving to the Windy City with his English professor mother after his parents split when he was three years old. One of his major inspirations, Donda West helped shape young Kanye, bringing him to China in the late '80s on education exchange and establishing a strong base that made him a top pupil in high school. However, his music dreams would eventually eclipse academics and he dropped out of college, setting the stage for his best-selling school trilogy. With guidance from local producer
            
            , West went on to learn the finer points of studio production, programming, and sampling, the latter technique becoming a hallmark of his early-2000s work.
            
            West first got his foot in the industry door in the late '90s, doing quite a bit of noteworthy production work for the likes of
            , , , and . However, it was West's work for at the dawn of the new millennium that took his career to the next level. Alongside fellow fresh talent , West became one of 's go-to producers, consistently delivering hot tracks to album after album. His star turn came on 's classic The Blueprint (2001) with album standouts "Takeover" and "Izzo (H.O.V.A.)." Both songs showcased West's signature beatmaking style of the time, which was largely sample-based; in these cases, the former track appropriated snippets of ' "Five to One," while the latter sampled
            
            's "I Want You Back."
            
            More high-profile productions followed, and before long, word spread that West was going to release an album of his own, on which he planned to rap as well as produce. Unfortunately, that album was a long time coming, pushed back repeatedly until a freak accident threatened to end his solo career before it even started. In October 2002, West was in a car accident that almost cost him his life and left him with a jaw wired shut during his weeks-long recovery. He capitalized on the traumatic experience by using it as the inspiration for "Through the Wire" (and its corresponding video), which would later become the lead single for his debut album, 2004's The College Dropout. As the album was further delayed, West continued to create big hits for the likes of
            ("Get By"), ("Stand Up"), ("'03 Bonnie & Clyde"), and ("You Don't Know My Name"). Then, just as "Through the Wire" was breaking big-time at the tail-end of 2003, another West song caught fire, a collaboration with and actor called "Slow Jamz," which gave the rapper/producer two simultaneously ubiquitous singles and a much-anticipated debut album. As with so many of West's songs, the singles were driven by somewhat recognizable sample-based hooks: 's "Through the Fire" in the case of "Through the Wire" and
            
            ' "A House Is Not a Home" in the case of "Slow Jamz."
            
            In the wake of his breakout success, West earned a whopping ten nominations at the 47th annual Grammy Awards, held in early 2005. The College Dropout won the Best Rap Album award, "Jesus Walks" won Best Rap Song, and a songwriting credit on "You Don't Know My Name" for Best R&B Song award was shared with
            and Harold Lilly. Later that year, West released his second solo album, Late Registration, which spawned a series of hit singles ("Diamonds in Sierra Leone," "Gold Digger," "Heard 'Em Say," "Touch the Sky"). The album topped the charts, as did the "Gold Digger" single, and Late Registration eventually won a Grammy for Rap Album of the Year. West's production work continued more or less unabated during this time; particularly noteworthy were hits for ("Overnight Celebrity"), ("I Want You"), ("Talk About Our Love"), ("Dreams"), ("Go!"), and ("I Changed My Mind"). West also founded his own label, (i.e., "Getting Out Our Dreams"), in conjunction with . The label's inaugural release was 's Get Lifted (2004), followed one year later by
            
            's Be. In addition to all of his studio work, West also toured internationally in support of Late Registration and released Late Orchestration: Live at Abbey Road Studios (2006) in commemoration.
            
            After retreating from the spotlight for some time, West returned to the forefront of the music world in 2007 with a series of album releases.
            's Don't Quit Your Day Job and 's Finding Forever, both released by , were chiefly produced by West; the latter proved to be particularly popular, topping the album chart upon its release in July. And then there was West's third solo album, Graduation, which was promoted well in advance of its September 11 release (a memorable date that pitted Kanye against , who in one interview swore he would quit music if his own album, Curtis, wasn't the top-seller). A pair of singles -- "Can't Tell Me Nothing" and "Stronger," the latter an interpolation of 's 2001 single "Harder, Better, Faster, Stronger" -- led the promotional push. It became his third consecutive chart-topping album, and its success culminated in eight Grammy nominations. West was the victor in four of the categories, and he performed two songs during the ceremony, including Late Registration's "Hey Mama," chosen in honor of his recently deceased mother. That loss, compounded by a breakup with his fiancée, informed 2008's genre-busting landmark 808s & Heartbreak, a major change of pace that saw West singing most of his emotionally pained lyrics with the assistance of Auto-Tune. The album went platinum, spawning Top Three hits "Love Lockdown" and "Heartless," while influencing a generation of young rappers wanting to tap into their emotional sides. West toured internationally, even returning to China in 2008 for a stop on his Glow in the Dark Tour. However, after a headline-grabbing turn at the 2009 MTV Video Awards involving
            
            , West retreated from the spotlight to record another album.
            
            In 2010, West emerged with his fifth opus, My Beautiful Dark Twisted Fantasy, which marked the start of a new era for the artist, one focused on fame, sex, and opulent production. Recorded in Hawaii, the star-studded set recruited a staggering number of guest vocal spots from the likes of
            , , , , , , and . Preceded by the bombastic, -sampling single "Power," Fantasy also included the Grammy-winning "All of the Lights," fan favorite "Runaway," and "Monster," which featured a star-making turn by a young . A sprawling and audacious album, it debuted at number one on the Billboard 200, won a Grammy for Best Rap Album, and also went multi-platinum. While the album was still hot, West recorded the aggressive and boast-heavy Watch the Throne with
            
            and numerous producers and songwriters. Billed as a set by the Throne, it was released in August 2011 and entered the Billboard Top 200 chart at number one. A trio of hit singles -- "Otis," "No Church in the Wild," and "Ni**as in Paris" -- climbed the charts and each won Grammy Awards, capping a dominant run for the rapper that resulted in 21 Grammys within just eight years.
            
            In September 2012, he released the
            collaboration album Cruel Summer, which featured artists such as , , and . Four singles ("Mercy," "Cold," "New Flow," and "Clique") were released as promotion for the record. Toward the end of the year, there were rumblings from acclaimed producers that a new album would emerge soon. These murmurs were soon confirmed when West himself announced that he was working on his sixth album with the likes of , , , ,
            
            , and many more contributing. As one of the most eagerly anticipated albums of 2013, the angry and aggressive Yeezus was released to rapturous reviews from critics. Incorporating industrial-electronic touches, screamed vocals, and soaring gospel, West touched upon both controversial and sensitive topics while delivering an astonishing and bold record, described as his most confrontational and bravest album to date. Despite leaking days before its official release, Yeezus still sold almost 327,000 copies during its first week and singles "Black Skinhead" and "Bound 2" were certified platinum while "New Slaves" received a Grammy nomination.
            
            The year 2013 also proved to be a personal milestone for West, as he became a father for the first time with partner Kim Kardashian. The following year, he announced a new album and released "Only One" featuring
            , which, like his 2015 single "FourFiveSeconds" with and , remained a non-LP release. Later, he announced another, different album, titled So Help Me God, which later turned to SWISH, then Waves, and finally The Life of Pablo. The album was released on Valentine's Day 2016 and shot to the top of the Billboard 200. The guest list for the platinum-selling effort included , , , , , , , , ,
            
            , and many more. In the age of streaming and direct artist-to-fan access, West took advantage of the technology and continued to tinker with the album even after it was released, tweaking production, guest verses, and even lyrics.
            
            During the promotion of Pablo, West canceled the final dates of his revolutionary Saint Pablo Tour -- during which he performed from a "floating" stage suspended above the pit -- and was hospitalized for psychiatric observation. He retreated from the spotlight for nearly a year and re-emerged in 2017 to begin recording material for his next album -- as well as production for artists on his
            label -- at a studio in Jackson Hole, Wyoming. While there, he also continued to court controversy with his political views and public statements made via social media. Amidst the headline flurry, he released a pair of singles in April 2018: "Lift Yourself" and "Ye vs. the People" with The following month, West delivered the first of the "Wyoming Sessions" studio productions with 's critically acclaimed, Grammy-nominated Daytona. A week later, West released his eighth official set, Ye, which featured appearances by , , and , as well as production by Mike Dean, Che Pope, , and . Singles "Yikes" and "All Mine" were both certified platinum and hovered around the Top Ten on the Hot 100. The third installment of the series arrived the next week, marking the debut of the collaborative project Kids See Ghosts, a duo formed by West and . Kids See Ghosts featured , , and , as well as samples of and . West's Wyoming Sessions were completed with the release of ' Nasir and
            
            's K.T.S.E., and he received a nomination for Producer of the Year at the 2019 Grammy Awards.
            
            Following the flurry of activity in Wyoming, West released a pair of singles to close out the year. While the drug- and lust-filled "XTCY" was more of a B-side, its follow-up "I Love It" with
            took off on the charts and became a viral hit, boosted by a surreal music video and equally quirky live television performances. Certified double platinum, the song was West's highest charting on the Hot 100 since 2015's "FourFiveSeconds." Riding the momentum of "I Love It," West announced that another album was imminent. Like the pre-Pablo SWISH and Waves buildup, the proposed Yandhi -- a sequel to Yeezus -- never materialized and, in 2019, West revealed the album would be titled Jesus Is King. To promote the effort, he expanded his "Sunday Service" gospel revival events across the U.S., playing early versions of the album to fans in Detroit, Chicago, and New York City. Issued that October, Jesus Is King became West's ninth straight number one studio album as a headliner. Singles "Closed on Sunday" and "Follow God" landed the rapper on multiple international charts, while the latter was certified gold in the U.S. A companion set from West's Sunday Service Choir, Jesus Is Born, arrived on Christmas Day 2019. Although West's vocals did not appear on the album, the crew intertwined their takes on tracks like "Ultralight Beam" and "Father Stretch My Hands" with their versions of beloved gospel songs by
            
            and Reverend Timothy Wright.
            
            The 2020s were ushered in with the single "Wash Us in the Blood" featuring
            . ~ Andy Kellman & Neil Z. Yeung, Rovi`
    }
  )

  const [albums, ] = useState([
      
  ])
//   const [ chosenStory, setChosenStory ] = useState({ id: 5541, Name: 'Beware the Frumious Bandersnatch', snippet: 'Twas brillig, and the slithy toves did gyre and gimble in the wabe.'});

//   const handleStorySelect = storyId => {
//     const chosenStory = stories.find(st => st.id === storyId);
//     setChosenStory(chosenStory);
//   };

  return(
    <div className="Music-disp">
      <h1>Some music thing</h1>

      
        <article className="featuredArtistArea">
            <img src="https://images.unsplash.com/photo-1432250767374-ee19cba37b52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2034&q=80" alt="newspapers"/>   

            {/* <LyricsCard idName="Lyrics Card" data={'Pink Floyd','The Dark Side Of The Moon'}/>  */}
            {/* <LyricsCard idName="Lyrics Card" artist={'Pink Floyd'} title={'The Dark Side Of The Moon'}/>  */}
            <LyricsCard idName="Lyrics Card" album={artistId} />
        </article>


        <TopArtists Name="topArtists" Artists={artists} />

        <AlbumDetails Album={album} />

      

    </div>
  );

};