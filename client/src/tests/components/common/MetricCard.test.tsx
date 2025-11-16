import { render, screen } from "@testing-library/react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TrendingUp } from "lucide-react";

describe("MetricCard", () => {
  it("renders label and value", () => {
    render(<MetricCard label="Total Mentions" value={1234} />);

    expect(screen.getByText("Total Mentions")).toBeInTheDocument();
    expect(screen.getByText("1,234")).toBeInTheDocument();
  });

  it("renders with string value", () => {
    render(<MetricCard label="Engagement Rate" value="8.45%" />);

    expect(screen.getByText("Engagement Rate")).toBeInTheDocument();
    expect(screen.getByText("8.45%")).toBeInTheDocument();
  });

  it("renders trend indicator when provided", () => {
    render(<MetricCard label="Positive Sentiment" value={850} trend="+8.2%" />);

    expect(screen.getByText("+8.2%")).toBeInTheDocument();
  });

  it("applies correct trend color for positive", () => {
    const { container } = render(
      <MetricCard label="Test" value={100} trend="+10%" />
    );

    const trendElement = screen.getByText("+10%");
    expect(trendElement).toHaveClass("text-green-400");
  });

  it("applies correct trend color for negative", () => {
    const { container } = render(
      <MetricCard label="Test" value={100} trend="-5%" />
    );

    const trendElement = screen.getByText("-5%");
    expect(trendElement).toHaveClass("text-red-400");
  });

  it("renders with icon when provided", () => {
    const { container } = render(
      <MetricCard label="Test" value={100} icon={TrendingUp} />
    );

    // Icon is rendered as SVG
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("formats large numbers with commas", () => {
    render(<MetricCard label="Large Number" value={1000000} />);

    expect(screen.getByText("1,000,000")).toBeInTheDocument();
  });

  it("has correct styling classes", () => {
    const { container } = render(<MetricCard label="Test" value={100} />);

    expect(container.querySelector(".bg-gradient-to-br")).toBeInTheDocument();
    expect(
      container.querySelector(".border-slate-700\\/50")
    ).toBeInTheDocument();
  });
});
