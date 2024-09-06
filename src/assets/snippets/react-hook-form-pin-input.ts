const reactHookFormPinInput = `import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PinInput, PinInputField } from "@/components/ui/pin-input";

const formSchema = z.object({
  otp: z.string().min(1, { message: "Please enter your otp code." }),
});

export default function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { otp: "" },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log({ data });

    setTimeout(() => {
      form.reset();
      setIsLoading(false);
    }, 2000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormControl>
                  <PinInput
                    {...field}
                    className="flex h-10 md:h-14 justify-between"
                    onComplete={() => setDisabledBtn(false)}
                    onIncomplete={() => setDisabledBtn(true)}
                    placeholder="◯"
                  >
                    {Array.from({ length: 7 }, (_, i) => {
                      if (i === 3)
                        return <Separator key={i} orientation="vertical" />;
                      return (
                        <PinInputField
                          key={i}
                          component={Input}
                          className={cn(
                            "size-10 md:size-14 text-base md:text-lg",
                            form.getFieldState("otp").invalid &&
                              "border-red-500"
                          )}
                        />
                      );
                    })}
                  </PinInput>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            size="lg"
            className="mt-2 h-8 md:h-10 md:text-lg md:py-5"
            disabled={disabledBtn}
            loading={isLoading}
          >
            Verify
          </Button>
        </div>
      </form>
    </Form>
  );
}
`;

export { reactHookFormPinInput };
