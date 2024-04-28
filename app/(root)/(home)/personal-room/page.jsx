"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { useGetCallById } from "@/hooks/useGetCallById";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Table = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl text-blue-500 w-max">
        {description}
      </h1>
    </div>
  );
};

const PersonalRoom = () => {
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const { toast } = useToast();

  const meetingId = user?.id;

  const { call } = useGetCallById(meetingId);

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  return (
    <>
      <h1 className="text-xl font-bold lg:text-3xl text-white-1 mb-5">Personal Meeting Room</h1>
      <section className="flex size-full flex-col gap-10 glassmorphism px-7 py-4 rounded-2xl">
        <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
          <Table title="Topic" description={`${user?.username}'s Meeting Room`} />
          <Table title="Meeting ID" description={meetingId} />
          <Table title="Invite Link" description={meetingLink} />
        </div>
        <div className="flex gap-5">
          <Button className="bg-green-600 text-white-1" onClick={startRoom}>
            Start Meeting
          </Button>
          <Button
            className="bg-orange-1 text-white-1"
            onClick={() => {
              navigator.clipboard.writeText(meetingLink);
              toast({
                title: "Link Copied",
              });
            }}
          >
            Copy Invitation
          </Button>
        </div>
      </section></>
  );
};

export default PersonalRoom;