"use client";

type Props = {
  label: string;
  location: string;
  className?: string;
};

export default function WhatsappButton({
  label,
  location,
  className,
}: Props) {
  return (
    <a
      href="https://wa.me/34621192582"
      onClick={() => {
        // @ts-ignore
        gtag("event", "click_whatsapp", {
          event_category: "contacte",
          event_label: location,
        });
      }}
      className={className}
    >
      {label}
    </a>
  );
}
