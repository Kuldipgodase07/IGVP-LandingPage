import { useState, useEffect } from "react";
import { Bot, Info, MoreVertical, Maximize2, Minus, Send, ArrowDown, Sparkles } from "lucide-react";

type WidgetState = "closed" | "menu" | "open" | "maximized";

let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx?.state === "suspended") {
    audioCtx.resume();
  }
};

// Enterprise-grade notification sound (Intercom/Zendesk style double-pop)
const playEnterpriseNotification = () => {
  try {
    if (!audioCtx) {
      initAudio(); // Fallback if not initialized
    }
    if (!audioCtx) return;

    // Helper to play a single "bubble" note
    const playPop = (time: number, freq: number) => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.type = "sine"; // Pure, clean tone
      osc.frequency.setValueAtTime(freq, time);

      // Extremely fast attack, quick exponential decay for a "pop" sound
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.4, time + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);

      osc.start(time);
      osc.stop(time + 0.15);
    };

    // Play a friendly two-tone ascending chord (C6 then E6)
    playPop(audioCtx.currentTime, 1046.5); // Note 1
    playPop(audioCtx.currentTime + 0.1, 1318.51); // Note 2
  } catch (e) {
    console.error("Audio playback failed", e);
  }
};

export function CopilotWidget() {
  const [widgetState, setWidgetState] = useState<WidgetState>("closed");
  const [hasPoppedUp, setHasPoppedUp] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Auto-popup logic that waits for user interaction to bypass browser Autoplay blocks
  // ensuring the sound actually plays automatically.
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const triggerPopup = () => {
      setWidgetState((currentState) => {
        if (currentState === "closed" && !hasPoppedUp) {
          setHasPoppedUp(true);
          playEnterpriseNotification();
          return "menu";
        }
        return currentState;
      });
    };

    const handleUserInteraction = () => {
      initAudio(); // Synchronously unlock audio context!

      if (!hasPoppedUp) {
        // Pop up 1.5 seconds after the user's first interaction with the page
        timer = setTimeout(triggerPopup, 1500);

        // Cleanup listeners so it only fires once
        window.removeEventListener("mousemove", handleUserInteraction);
        window.removeEventListener("scroll", handleUserInteraction);
        window.removeEventListener("click", handleUserInteraction);
        window.removeEventListener("keydown", handleUserInteraction);
      }
    };

    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [hasPoppedUp]);

  const handleToggleClick = () => {
    playEnterpriseNotification();
    setWidgetState("menu");
  };

  const handleOpenChat = () => {
    playEnterpriseNotification();
    setWidgetState("open");
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    playEnterpriseNotification();
    setInputValue("");
    // Here you would normally handle sending the message to an API
  };

  if (widgetState === "closed") {
    return (
      <button
        onClick={handleToggleClick}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-xl hover:bg-primary-hover hover:scale-105 transition-all duration-300"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-primary shadow-sm">
          <Bot className="h-5 w-5" />
        </div>
        <span className="font-bold text-base">Ask IGVP Copilot</span>
      </button>
    );
  }

  if (widgetState === "menu") {
    return (
      <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)]">
        {/* Detached Close Button */}
        <div className="flex justify-end mb-2 mr-2">
          <button
            onClick={() => setWidgetState("closed")}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors shadow-lg backdrop-blur-sm"
          >
            <Minus className="h-5 w-5" />
          </button>
        </div>

        <div className="relative flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-[#0052cc] to-[#0040a8] p-6 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#0052cc] shadow-md">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              Need help? Ask IGVP Copilot.
            </h3>
          </div>

          {/* Input Area */}
          <div className="relative mb-6 cursor-text" onClick={handleOpenChat}>
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Sparkles className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              readOnly
              placeholder="Ask me about products, features, a..."
              className="h-14 w-full cursor-text rounded-xl bg-white pl-12 pr-12 text-[15px] text-gray-900 placeholder:text-gray-500 outline-none shadow-sm"
            />
            <button className="absolute inset-y-0 right-2 my-2 mr-2 flex w-10 items-center justify-center rounded-md bg-transparent text-gray-300 hover:text-gray-500 transition-colors">
              <Send className="h-5 w-5" />
            </button>
          </div>

          {/* Suggestions */}
          <div className="flex flex-col gap-3">
            {[
              "Connect me with a sales rep",
              "Show me an IGVP Copilot demo",
              "How can IGVP help my business",
            ].map((text) => (
              <button
                key={text}
                onClick={handleOpenChat}
                className="w-full rounded-lg border border-white/40 bg-transparent px-4 py-3 text-left text-sm font-bold text-white hover:bg-white/10 transition-colors shadow-sm"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // "open" or "maximized" states (the white chat window)
  return (
    <div
      className={`fixed bottom-0 right-6 z-50 transition-all duration-300 ease-in-out bg-background border border-border shadow-2xl flex flex-col ${
        widgetState === "maximized"
          ? "w-[450px] h-[80vh] rounded-t-xl"
          : "w-[380px] h-[600px] rounded-t-xl"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-background rounded-t-xl">
        <div className="flex items-center gap-2 text-foreground">
          <span className="font-semibold text-lg">IGVP Copilot</span>
          <Info className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <button className="hover:text-foreground transition-colors">
            <MoreVertical className="h-4 w-4" />
          </button>
          <button
            onClick={() => {
              playEnterpriseNotification();
              setWidgetState(widgetState === "maximized" ? "open" : "maximized");
            }}
            className="hover:text-foreground transition-colors"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => {
              playEnterpriseNotification();
              setWidgetState("closed");
            }}
            className="hover:text-foreground transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col relative bg-background scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#032D60] leading-tight">
            How can <br />
            <span className="text-primary">IGVP Copilot</span> help?
          </h2>
          <p className="text-xs text-muted-foreground mt-4">IGVP Copilot joined • 9:40 PM</p>
        </div>

        <div className="flex gap-3 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Bot className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[15px] text-foreground leading-relaxed">
              Hi, I'm IGVP Copilot! I can answer your platform questions and connect you with our
              Experts. Ask me things like, 'Can I chat with an Expert?' or 'What is Venture OS?'
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleSendMessage}
                className="rounded-md border border-primary text-primary px-4 py-2.5 text-sm font-semibold text-center hover:bg-primary/5 transition-colors shadow-sm"
              >
                Connect me with a sales rep
              </button>
              <button
                onClick={handleSendMessage}
                className="rounded-md border border-primary text-primary px-4 py-2.5 text-sm font-semibold text-center hover:bg-primary/5 transition-colors shadow-sm"
              >
                Show me an IGVP Copilot demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to bottom button (visual only) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-md border border-border text-primary cursor-pointer hover:bg-surface transition-colors">
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border p-4 bg-background">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
            placeholder="Message IGVP Copilot"
            className="w-full rounded-lg border border-primary/40 bg-background px-4 py-3 pr-12 text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-inner"
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
