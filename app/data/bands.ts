
// ข้อมูลจำลองวงดนตรี

import type {Band} from '../types/types'

export const bands: Band[] = [
  {
    id: "5sos",
    name: "5 Seconds of Summer",
    logo: "/image/5 seconds of summer/5 seconds of summer Logo/5 seconds of summer logo.webp",
    description: "วงดนตรีป็อปร็อก/ป็อปพังก์จากซิดนีย์, ออสเตรเลีย ตั้งขึ้นในค.ศ. 2011 โดยสมาชิก 4 คน ได้แก่ ลุค เฮมมิงก์ส (Luke Hemmings) (ร้องนำ, กีต้าร์), ไมเคิล คลิฟฟอร์ด (Michael Clifford) (กีต้าร์, ร้อง), คาลัม ฮูด (Calum Hood) (กีต้าร์เบส, ร้อง) และ แอชตัน เออร์วิน (Ashton Irwin) (กลอง, ร้อง) โดยเริ่มต้นจากการโพสต์วิดีโอคัพเวอร์เพลงของนักร้องชื่อดังต่างๆและเพลงที่เขียนเองบนเว็บไซต์ยูทูป ต่อมาเป็นที่รู้จักมากขึ้นจากการร่วมทัวร์คอนเสิร์ต Take Me Home Tour",
    formedYear: 2011,
    members: [
      {
        id: "1",
        name: "Luke Hemmings",
        image: "/image/5 seconds of summer/Luke Hemmings.jpg",
        role: "Lead Vocals",
      },
      {
        id: "2",
        name: "Michael Clifford",
        image: "/image/5 seconds of summer/Michael Clifford.jpg",
        role: "Guitar",
      },
      {
        id: "3",
        name: "Calum Hood",
        image: "/image/5 seconds of summer/Calum Hood.jpg",
        role: "Bass",
      },
      {
        id: "4",
        name: "Ashton Irwin",
        image: "/image/5 seconds of summer/Ashton Irwin .jpg",
        role: "Drums",
      },
    ],
  },
  {
    id: "coldplay",
    name: "Coldplay",
    logo: "/image/Coldplay/ColdplayLogo/coldplay.jpg",
    description: "วงดนตรีร็อกจากลอนดอน, สหราชอาณาจักร ก่อตั้งวงในปี พ.ศ. 2541 โดยมีสมาชิกคือ คริส มาร์ติน (Chris Martin) ในตำแหน่งนักร้องนำและมือเปียโน, จอนนี่ บัคแลนด์ (Jonny Buckland) ในตำแหน่งมือกีตาร์, กาย เบอร์รี่แมน (Guy Berryman) ในตำแหน่งมือเบสและ วิล แชมเปียน (Will Champion) ในตำแหน่งมือกลอง ซึ่งมีโปรดิวเซอร์วงคือ ฟิล ฮาร์วี (Phil Harvey) ",
    formedYear: 1996,
    members: [
      {
        id: "1",
        name: "Chris Martin",
        image: "/image/Coldplay/Chris Martin.webp",
        role: "Lead Vocals",
      },
      {
        id: "2",
        name: "Jonny Buckland",
        image: "/image/Coldplay/Jonny Buckland.webp",
        role: "Guitar",
      },
      {
        id: "3",
        name: "Guy Berryman",
        image: "/image/Coldplay/Guy Berryman.jpeg",
        role: "Bass",
      },
      {
        id: "4",
        name: "Will Champion",
        image: "/image/Coldplay/Will Champion.webp",
        role: "Drums",
      },
      {
        id: "5",
        name: "Phil Harvey",
        image: "/image/Coldplay/Phil Harvey.webp",
        role: "Manager & Sound Engineer",
      },
    ],
  },
  {
    id: "onerepublic",
    name: "OneRepublic",
    logo: "/image/OneRepublic/one republic logo/one republic logo.jpg",
    description: "วงดนตรีแนวป็อปร็อกชาวอเมริกันมาจากโคโลราโดสปริงส์ รัฐโคโลราโด ก่อตั้งในปี ค.ศ. 2003 โดยไรอัน เท็ดเดอร์ และแซ็ก ฟิลคินส์ วงประสบความสำเร็จผ่านทางมายสเปซตั้งแต่ยังไม่เซ็นสัญญากับค่ายเพลงใด ๆ จนกระทั่งในปี ค.ศ. 2003 วงได้พบกับนักแสดงจากฮอลลีวูด เคลลี แบร์เร็ตต์ เธอโทรศัพท์ไปยังตัวแทนฝ่ายคัดสรรและพัฒนาศิลปิน เพื่อติดต่อลูกพี่ลูกน้อง จิมมี เอียนเนอร์ และดอนนี เอียนเนอร์ ซึ่งเป็นประธานบริษัทโซนีในขณะนั้น ให้มาชมการแสดงของวง พวกเขาเซ็นสัญญากับค่ายเพลงโซนี บีเอ็มจี เป็นเวลาสามปี ก่อนย้ายไปอยู่ค่ายมอสลีย์มิวสิกกรุ๊ป",
    formedYear: 2002,
    members: [
      {
        id: "1",
        name: "Ryan Tedder",
        image: "/image/OneRepublic/Ryan Tedder.webp",
        role: "Lead Vocals",
      },
      {
        id: "2",
        name: "Brent Kutzle",
        image: "/image/OneRepublic/Brent Kutzle.webp",
        role: "Cello",
      },
      {
        id: "3",
        name: "Drew Brown",
        image: "/image/OneRepublic/Drew Brown.jpeg",
        role: "Guitar",
      },
      {
        id: "4",
        name: "Jerrod Bettis",
        image: "/image/OneRepublic/Jerrod Bettis.webp",
        role: "Bass",
      },
      {
        id: "5",
        name: "Tim Myers",
        image: "/image/OneRepublic/Tim Myers.webp",
        role: "Drums",
      },
      {
        id: "6",
        name: "Brian Willett",
        image: "/image/OneRepublic/Brian Willett.webp",
        role: "Keyboard",
      },
      {
        id: "7",
        name: "Eddie Fisher",
        image: "/image/OneRepublic/Eddie Fisher.jpeg",
        role: "Lead Guitar",
      },
    ],
  },
];
