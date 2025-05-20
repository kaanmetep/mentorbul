import React from "react";

const MentorPage = ({ params }: { params: { slug: string } }) => {
  const mentorId = params.slug.split("-").pop();
  console.log(mentorId);
  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 py-10">
      asdasdasd
    </div>
  );
};

export default MentorPage;
