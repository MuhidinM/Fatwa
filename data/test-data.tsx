import { Button } from "@/components/ui/button";
import { Payment } from "@/types/types";

export async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "7hsd9k3l",
      action: (
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      ),
      category: "processing",
      fatwa: "What is the significance of Hajj in Islam?",
    },
    {
      id: "p4r2o6u8",
      action: (
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      ),
      category: "pending",
      fatwa: "How should Muslims seek knowledge in Islam?",
    },
    {
      id: "t2v5y1x6",
      action: (
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      ),
      category: "failed",
      fatwa: "What are the principles of Islamic finance?",
    },
    {
      id: "q8z3w6f7",
      action: (
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      ),
      category: "success",
      fatwa: "How should Muslims approach family relationships?",
    },
    {
      id: "k9g4s2l1",
      action: (
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      ),
      category: "processing",
      fatwa: "What is the concept of Tawhid in Islam?",
    },
    {
      id: "u7j3r5e8",
      action: (
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      ),
      category: "pending",
      fatwa: "What is the role of women in Islam?",
    },
    {
      id: "x5c1v8b2",
      action: (
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      ),
      category: "failed",
      fatwa: "How should Muslims deal with adversity?",
    },
    {
      id: "z3f7q6w5",
      action: (
        <Button variant={"link"} size={"sm"}>
          View
        </Button>
      ),
      category: "success",
      fatwa: "What is the importance of Sunnah in Islam?",
    },
    {
      id: "d2v4k6p1",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "processing",
      fatwa: "How do Muslims celebrate Eid al-Fitr?",
    },
    {
      id: "r8u3m5b7",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "pending",
      fatwa: "What is the concept of Zakat in Islam?",
    },
    {
      id: "h3j9x5l2",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "failed",
      fatwa: "What is the significance of Friday prayers in Islam?",
    },
    {
      id: "u6o1z8y3",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "success",
      fatwa: "How does Islam promote environmental conservation?",
    },
    {
      id: "a7t4g6q9",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "processing",
      fatwa: "What is the role of mosques in the Muslim community?",
    },
    {
      id: "k2v8s6l1",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "pending",
      fatwa: "How should Muslims approach interfaith dialogue?",
    },
    {
      id: "p9w5r2d8",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "failed",
      fatwa: "What is the Islamic perspective on forgiveness?",
    },
    {
      id: "s4y7u8t2",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "success",
      fatwa: "How should Muslims navigate modern challenges in society?",
    },
    {
      id: "q6z8x3c1",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "processing",
      fatwa: "What is the role of the Quran in shaping Islamic ethics?",
    },
    {
      id: "b5f7v1r8",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "pending",
      fatwa: "How do Muslims celebrate the birth of Prophet Muhammad?",
    },
    {
      id: "g9k2h4s6",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "failed",
      fatwa: "What is the significance of the hijab in Islam?",
    },
    {
      id: "m1n8b3v6",
      action: <Button variant={"link"} size={"sm"}>View</Button>,
      category: "success",
      fatwa: "How does Islam promote social justice?",
    },
  ];
}
