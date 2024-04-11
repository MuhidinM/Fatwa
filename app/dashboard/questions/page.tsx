"use client";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

import { Question } from "@/types/types";
import { columns } from "@/components/dashboard/column";
import { DataTable } from "@/components/ui/data-table";
import { db } from "@/app/firebase-config";

interface PartialQuestion extends Omit<Partial<Question>, "askedDate"> {
  askedDate?: string | number;
}

const QuestionsHome = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const questionsRef = ref(db, "questions");

    onValue(
      questionsRef,
      (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (data) {
          const questionsArray: Question[] = Object.values(data);
          const filteredData: Question[] = questionsArray.filter(
            (question) => question.status === 0
          );
          const transformedData: Question[] = filteredData.map((question) => {
            const transformedQuestion: PartialQuestion = {
              uuid: question.uuid,
              answer: question.answer,
              answeredBy: question.answeredBy,
              answeredDate: question.answeredDate,
              askedBy: question.askedBy,
              askedDate: formatDistanceToNow(Number(question.askedDate)),
              category: question.category,
              question: question.question,
              references: question.references,
              status: question.status,
            };

            return transformedQuestion as Question;
          });

          setQuestions(transformedData);
        }
      },
      {
        onlyOnce: false,
      }
    );
  }, []);
  console.log(questions);

  return (
    <div className="md:container mx-auto py-10">
      <DataTable columns={columns} data={questions} />
    </div>
  );
};

export default QuestionsHome;
